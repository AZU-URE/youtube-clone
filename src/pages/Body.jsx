import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Home from "../component/Home";
function Body() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default Body;
