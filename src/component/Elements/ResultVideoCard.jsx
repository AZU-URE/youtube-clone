import React from "react";
import { timestampRevamp } from "../../util/common";

function ResultVideoCard({ video }) {
  const { snippet } = video;
  console.log(snippet);
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;

  return (
    <div className="flex space-x-[2rem] p-[0.75rem] mx-[0.5rem] hover:bg-zinc-400/20 rounded-lg ">
      <img
        src={thumbnails?.high?.url}
        alt="thumbnail"
        className="rounded-lg h-[360px] w-auto "
      ></img>
      <div>
        <h1 className="text-[1.25rem] font-medium">{title}</h1>
        <p className="text-zinc-600 text-sm">{timestampRevamp(publishedAt)}</p>
        <p className="my-[0.75rem] font-bold text-sm">{channelTitle}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ResultVideoCard;
