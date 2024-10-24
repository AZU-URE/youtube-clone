import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="h-full w-full flex space-x-[5rem] mt-[4.5rem]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
