import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="h-full w-full flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
