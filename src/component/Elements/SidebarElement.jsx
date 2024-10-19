import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SidebarElement({ name, icon, link }) {
  const open = useSelector((store) => store.body.sidebarOpen);
  return (
    // <Link to={el.link}>
    <div
      className={`cursor-pointer flex items-center  hover:bg-zinc-400/40 rounded-lg ${
        open
          ? "flex-row space-x-[0.5rem] px-[1rem]  p-[0.5rem] "
          : "flex-col px-[0.25rem] py-[0.5rem]"
      }`}
    >
      <div>{icon}</div>
      <p className={`${open ? "font-medium" : "font-extralight text-xs"} `}>
        {name}
      </p>
    </div>
    // </Link>
  );
}

export default SidebarElement;
