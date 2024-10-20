import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { YOUTUBE_LOGO } from "../constant/resources";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../util/redux-store/BodySlice";
import { setSearchQuery } from "../util/redux-store/searchSlice";
import useYoutubeSearch from "../hooks/useYoutubeSearch";
import SearchSuggestion from "./Elements/SearchSuggestion";
function Header() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.search.query);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { getSuggestions } = useYoutubeSearch();
  useEffect(() => {
    const timer = setTimeout(getSuggestions, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col grid-cols-12 p-[1rem] px-[1rem] shadow-lg ">
      <div className="flex items-center col-span-2 space-x-5">
        <GiHamburgerMenu
          className="h-[1.5rem] w-auto cursor-pointer "
          onClick={() => dispatch(toggleSidebar())}
        />
        <img src={YOUTUBE_LOGO} alt="yoututbe" className="h-[1.75rem]"></img>
      </div>
      {/* <div className="col-span-8 items-center w-full flex justify-center flex-col"> */}
      <form
        className=" w-full col-span-8 flex justify-center relative  "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search"
          className="border-[1px] border-slate-500 w-[70%] p-[0.5rem] px-[1rem] rounded-l-full"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        ></input>
        <button
          type="submit"
          className="border-[1px] border-slate-500 px-[1rem] border-l-0 bg-zinc-400/40 hover:bg-zinc-500/40 rounded-r-full"
        >
          <IoSearchOutline className="h-[1.5rem] w-auto " />
        </button>
        {showSuggestion && <SearchSuggestion />}
      </form>
      {/* </div> */}
      <div className="col-span-2 flex justify-end items-center">
        <FaRegCircleUser className="h-[2rem] w-auto " />
      </div>
    </div>
  );
}

export default Header;
