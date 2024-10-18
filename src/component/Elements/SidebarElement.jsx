import React from "react";
import { Link } from "react-router-dom";

function SidebarElement({ name, icon, link }) {
  return (
    // <Link to={el.link}>
    <div className="cursor-pointer flex items-center space-x-[0.5rem] hover:bg-slate-400/40 p-[0.5rem] px-[1rem] rounded-lg">
      <div>{icon}</div>
      <p className="font-medium">{name}</p>
    </div>
    // </Link>
  );
}

export default SidebarElement;
