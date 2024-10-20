import { useSelector, useDispatch } from "react-redux";
import { SEARCH_API } from "../constant/api";
import { setSuggestion } from "../util/redux-store/searchSlice";
const useYoutubeSearch = () => {
  const query = useSelector((store) => store.search.query);
  const dispatch = useDispatch();
  const getSuggestions = async () => {
    const data = await fetch(SEARCH_API + query);
    const json = await data.json();
    dispatch(setSuggestion(json[1]));
  };
  return { getSuggestions };
};

export default useYoutubeSearch;
