import { useSelector, useDispatch } from "react-redux";
import { KEY, SEARCH_API, SEARCH_VIDEO_API } from "../constant/api";
import {
  setSuggestion,
  setCache,
  setResultVideo,
} from "../util/redux-store/searchSlice";
const useYoutubeSearch = () => {
  const query = useSelector((store) => store.search.query);
  const cache = useSelector((store) => store.search.cache);

  const dispatch = useDispatch();
  const getSuggestions = async () => {
    if (cache[query]) {
      dispatch(setSuggestion(cache[query]));
    } else {
      const data = await fetch(SEARCH_API + query);
      const json = await data.json();
      dispatch(setCache({ [query]: json[1] }));
      dispatch(setSuggestion(json[1]));
    }
  };

  const getSearchVideo = async (query) => {
    const url = `${SEARCH_VIDEO_API}${query}&${KEY}`;
    const data = await fetch(url);
    const json = await data.json();
    dispatch(setResultVideo(json?.items));
    // console.log(json?.items);
    // console.log(json);
  };
  return { getSuggestions, getSearchVideo };
};

export default useYoutubeSearch;
