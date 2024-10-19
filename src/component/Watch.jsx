import React from "react";
import { useSearchParams } from "react-router-dom";
function Watch() {
  const [searchParams] = useSearchParams();

  return (
    <div className="w-full h-full p-[1rem] px-[2rem]">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-2/3 h-auto aspect-video rounded-lg "
      ></iframe>
    </div>
  );
}

export default Watch;
