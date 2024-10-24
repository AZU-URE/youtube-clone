import React from "react";
import CategoryContainer from "./CategoryContainer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full px-[1rem] py-[1rem]">
      <CategoryContainer />
      <Outlet />
    </div>
  );
}

export default Home;
