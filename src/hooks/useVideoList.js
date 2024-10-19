import { MOSTO_POPULAR_VIDEOS } from "../constant/api";
import { useDispatch } from "react-redux";
import { setVideoContainer } from "../util/redux-store/HomeSlice";
export default function useVideoList() {
  const dispatch = useDispatch();
  const fetchPopularVideo = async () => {
    try {
      const data = await fetch(MOSTO_POPULAR_VIDEOS);
      const json = await data.json();
      dispatch(setVideoContainer(json?.items));
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchPopularVideo };
}
