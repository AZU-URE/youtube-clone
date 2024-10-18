import React from "react";
import CategoryContainer from "./CategoryContainer";
import VideoContainer from "./VideoContainer";

function Home() {
  return (
    <div className="w-full h-full px-[2rem] py-[1rem]">
      <CategoryContainer />
      <VideoContainer />
    </div>
  );
}

export default Home;
