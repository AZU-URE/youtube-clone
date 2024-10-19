import React, { useEffect } from "react";
import { SIDEBAR_LIST1 } from "../constant/lists";

import SidebarElement from "./Elements/SidebarElement";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    if (path !== "/") {
    }
  }, [path]);
  const open = useSelector((store) => store.body.sidebarOpen);
  return (
    <div
      className={`shadow-xl shadow-zinc-500 bg-zinc-100 ${
        open
          ? "p-[1rem] space-y-[0.5rem]"
          : "px-[0.25rem] py-[1rem] space-y-[1.5rem]"
      } flex flex-col `}
    >
      {SIDEBAR_LIST1.map((el) => (
        <SidebarElement {...el} key={el.name} />
      ))}
    </div>
  );
}

export default Sidebar;
