import React from "react";
import { refactorNum, timestampRevamp } from "../../util/common";

function VideoCard({ detail }) {
  const { snippet, statistics } = detail;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="hover:shadow-xl hover:bg-slate-50/50 hover:scale-[1.03] p-2 py-[1rem] rounded-lg cursor-pointer ">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg mb-[0.75rem] w-full "
      ></img>
      <div className=" px-[0.5rem]">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-zinc-600">{channelTitle}</p>
        <div className="flex items-center space-x-2">
          <p className="text-zinc-600">{refactorNum(viewCount)} views</p>
          <div className="h-1 w-1 rounded-full bg-zinc-600"></div>
          <p className="text-zinc-600">{timestampRevamp(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
