import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refactorQuery } from "../../util/common";
import { setSearchQuery } from "../../util/redux-store/searchSlice";
function SearchSuggestion() {
  const suggestion = useSelector((store) => store.search.suggestion);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = (el) => {
    dispatch(setSearchQuery(el));
    const url = `/results?search_query=${refactorQuery(el)}`;
    navigate(url);
  };

  if (suggestion.length === 0) return;
  return (
    <div className="z-10 flex flex-col bg-white py-[1rem] rounded-lg  w-[75%] m-auto absolute top-[2.75rem]  shadow-lg border-t-0 border-[1px] border-black/30">
      {suggestion.map((el) => (
        <p
          key={el}
          className="hover:bg-slate-200/50 py-[0.25rem] px-[0.75rem]  font-medium cursor-default "
          onClick={() => handleRedirect(el)}
        >
          {el}
        </p>
      ))}
    </div>
  );
}

export default SearchSuggestion;
