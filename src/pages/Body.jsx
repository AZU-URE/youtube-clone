import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Home from "../component/Home";
function Body() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="h-full w-full flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default Body;
