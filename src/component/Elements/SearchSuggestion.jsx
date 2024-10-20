import React from "react";
import { useSelector } from "react-redux";
function SearchSuggestion() {
  const suggestion = useSelector((store) => store.search.suggestion);
  //   console.log(suggestion);
  if (suggestion.length === 0) return;
  return (
    <div className="flex flex-col bg-white py-[1rem] rounded-lg  w-[75%] m-auto absolute top-[2.75rem]  shadow-lg border-t-0 border-[1px] border-black/30">
      <ul>
        {suggestion.map((el) => (
          <li
            key={el}
            className="hover:bg-slate-200/50 px-[0.5rem] py-[0.25rem] font-medium cursor-default "
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchSuggestion;
