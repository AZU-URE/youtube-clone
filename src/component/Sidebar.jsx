import React from "react";
import { SIDEBAR_LIST1 } from "../constant/lists";

import SidebarElement from "./Elements/SidebarElement";
import { useSelector } from "react-redux";

function Sidebar() {
  const open = useSelector((store) => store.body.sidebarOpen);
  return (
    <div
      className={`shadow-lg ${
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
