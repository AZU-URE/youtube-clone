import React from "react";
import { SIDEBAR_LIST1 } from "../constant/lists";

import SidebarElement from "./Elements/SidebarElement";

function Sidebar() {
  return (
    <div className="shadow-lg p-[1rem] flex flex-col space-y-[0.5rem]">
      {SIDEBAR_LIST1.map((el) => (
        <SidebarElement {...el} />
      ))}
    </div>
  );
}

export default Sidebar;
