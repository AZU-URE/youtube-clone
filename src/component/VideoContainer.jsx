import React, { useEffect } from "react";
import useVideoList from "../hooks/useVideoList";
import { useSelector } from "react-redux";
import VideoCard from "./Elements/VideoCard";
function VideoContainer() {
  const videos = useSelector((store) => store.home.VideoContainer);
  const { fetchPopularVideo } = useVideoList();
  useEffect(() => {
    fetchPopularVideo();
  }, []);
  return (
    <div className=" pt-[0.5rem] grid grid-cols-3 w-full gap-x-[1.5rem] gap-y-[1rem]">
      {/* <VideoCard detail={videos[0]} /> */}
      {videos.map((video) => (
        <VideoCard key={video.id} detail={video} />
      ))}
    </div>
  );
}

export default VideoContainer;
