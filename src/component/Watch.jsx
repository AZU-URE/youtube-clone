import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Elements/CommentsContainer";
import LiveChat from "./Elements/LiveChat";
function Watch() {
  const [searchParams] = useSearchParams();

  return (
    <div className="w-full h-full p-[1rem] px-[2rem] space-y-[1.5rem]">
      <div className="flex space-x-2 h-3/4">
        <iframe
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-2/3 h-auto aspect-video rounded-lg "
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer id={searchParams.get("v")} />
    </div>
  );
}

export default Watch;
