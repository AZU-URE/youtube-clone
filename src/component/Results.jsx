import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useYoutubeSearch from "../hooks/useYoutubeSearch";
import { setShowSuggestion } from "../util/redux-store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultVideoCard from "./Elements/ResultVideoCard";

function Results() {
  const [searchParam] = useSearchParams();
  const { getSearchVideo } = useYoutubeSearch();
  const result = useSelector((store) => store.search.resultVideo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setShowSuggestion(false));
    getSearchVideo(searchParam.get("search_query"));
  }, [searchParam]);
  if (result.length === 0) return;
  return (
    <div className="p-[1rem] space-y-[2rem]">
      {result.map((video) =>
        video?.id?.kind === "youtube#video" ? (
          <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
            <ResultVideoCard video={video} />
          </Link>
        ) : null
      )}
    </div>
  );
}

export default Results;
