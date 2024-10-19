import React, { useEffect } from "react";
import useVideoList from "../hooks/useVideoList";
import { useSelector } from "react-redux";
import VideoCard from "./Elements/VideoCard";
import { Link } from "react-router-dom";
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
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard detail={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
