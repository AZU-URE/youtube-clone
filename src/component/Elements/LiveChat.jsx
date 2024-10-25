import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../../util/redux-store/watchSlice";
import { generateRandomChat } from "../../util/common";
function LiveChat() {
  const dispatch = useDispatch();
  const [seeChat, setSeeChat] = useState(false);
  const messages = useSelector((store) => store.watch.liveChat);
  useEffect(() => {
    const interval = setInterval(() => {
      seeChat && dispatch(addLiveChat(generateRandomChat()));
    }, 2000);

    return () => clearInterval(interval);
  }, [seeChat]);
  return (
    <div className="w-1/3 border-[1px] border-black h-full rounded-lg p-2 bg-slate-100 flex flex-col items-start justify-between">
      {seeChat ? (
        <div className="w-full  overflow-y-scroll h-full flex flex-col-reverse">
          {messages.map((message, i) => (
            <Chat {...message} key={i} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <button
            className="p-2 px-[1rem] rounded-lg bg-slate-300 font-semibold text-[1.25rem]"
            onClick={() => {
              setSeeChat(true);
            }}
          >
            See Live Chat
          </button>
        </div>
      )}
      <div className="w-full">
        <form
          className="w-full flex space-x-2 "
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(e.target);

            dispatch(
              addLiveChat({
                name: "Anonymous",
                message: e.target.chat.value,
              })
            );

            e.target.chat.value = "";
          }}
        >
          <input
            placeholder="Type your message.."
            className="w-full p-1 rounded-lg px-2"
            name="chat"
          ></input>
          <button className="py-1 px-2 bg-red-400 rounded-lg text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default LiveChat;

function Chat({ name, message }) {
  return (
    <div className="space-x-2 my-2 bg-slate-50 rounded-md p-1">
      <span className="font-semibold">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}
