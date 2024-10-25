import React, { useEffect, useState } from "react";
import { commentsRes } from "../../constant/resources";
import useVideoList from "../../hooks/useVideoList";
import { useSelector } from "react-redux";
function CommentsContainer({ id }) {
  const { fetchComments } = useVideoList();
  useEffect(() => {
    fetchComments(id);
  }, []);
  const commentArr = useSelector((store) => store.watch.comment);
  console.log(commentArr);
  if (commentArr === undefined) return;
  return (
    <div>
      <h3 className="text-[1.25rem] font-medium mb-[1rem]">Comments</h3>
      <CommentsSubContainer comments={commentArr} />
    </div>
  );
}

export default CommentsContainer;

function CommentsSubContainer({ comments }) {
  if (comments === undefined) return;
  return (
    <div className="space-y-[1.25rem]">
      {comments.map((el, index) => (
        <Comment {...el} key={index} />
      ))}
    </div>
  );
}

function Comment({ name, comment, reply, profilePic }) {
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="flex space-x-[0.5rem]   ">
      <img
        src={profilePic}
        alt="p"
        className="rounded-full w-[2rem] h-[2rem]"
      ></img>
      <div>
        <p className="font-semibold">{name}</p>
        <p>{comment}</p>
        <div className="ml-[1rem]  pl-[1rem] mt-[1rem]">
          {reply.length !== 0 ? (
            <button
              className="bg-slate-200 p-1 px-3 rounded-lg text-blue-700 font-semibold mb-[1rem]"
              onClick={() => setShowReply(!showReply)}
            >
              {showReply ? "Hide" : "Show"} {reply.length} replies
            </button>
          ) : null}
          {showReply ? <CommentsSubContainer comments={reply} /> : null}
        </div>
      </div>
    </div>
  );
}
