import { MOST_POPULAR_VIDEOS } from "../constant/api";
import { useDispatch } from "react-redux";
import { setVideoContainer } from "../util/redux-store/HomeSlice";
export default function useVideoList() {
  const dispatch = useDispatch();
  const fetchPopularVideo = async () => {
    try {
      const data = await fetch(MOST_POPULAR_VIDEOS);
      const json = await data.json();
      dispatch(setVideoContainer(json?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async (id) => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}`;

      const data = await fetch(url);
      const json = await data.json();
      console.log(json.items);

      // return json.items[0];
    } catch (error) {}
  };

  return { fetchPopularVideo, fetchVideo };
}
