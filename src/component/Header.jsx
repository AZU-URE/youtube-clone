import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { YOUTUBE_LOGO } from "../constant/resources";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="grid grid-flow-col grid-cols-12 p-[1rem] px-[1rem] shadow-lg ">
      <div className="flex items-center col-span-2 space-x-5">
        <GiHamburgerMenu className="h-[1.5rem] w-auto " />
        <img src={YOUTUBE_LOGO} alt="yoututbe" className="h-[2rem]"></img>
      </div>
      <form className="col-span-8  w-full flex justify-center  ">
        <input
          type="text"
          placeholder="Search"
          className="border-[1px] border-slate-500 w-[70%] p-[0.5rem] px-[1rem] rounded-l-full"
        ></input>
        <button
          type="submit"
          className="border-[1px] border-slate-500 px-[1rem] border-l-0 bg-zinc-400/40 hover:bg-zinc-500/40 rounded-r-full"
        >
          <IoSearchOutline className="h-[1.5rem] w-auto " />
        </button>
      </form>
      <div className="col-span-2 flex justify-end items-center">
        <FaRegCircleUser className="h-[2rem] w-auto " />
      </div>
    </div>
  );
}

export default Header;
