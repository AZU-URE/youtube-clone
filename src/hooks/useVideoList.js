import { COMMENT_THREAD, KEY, MOST_POPULAR_VIDEOS } from "../constant/api";
import { useDispatch } from "react-redux";
import { setVideoContainer } from "../util/redux-store/HomeSlice";
import { setComment } from "../util/redux-store/watchSlice";
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

  const fetchComments = async (id) => {
    try {
      const url = COMMENT_THREAD + id + KEY;
      const data = await fetch(url);
      const json = await data.json();
      const arr = json?.items;
      const comments = commentObj(arr);

      dispatch(setComment(comments));

      // const commentObject = { ...comments, reply: replies };
    } catch (error) {
      alert(error.message);
    }
  };

  const commentObj = (arr) => {
    const comments = arr.map((el) => {
      const { textDisplay, authorDisplayName, authorProfileImageUrl } =
        el?.snippet?.topLevelComment?.snippet;
      const replyArr = el?.replies?.comments;
      const reply = replyArr !== undefined ? replyObj(replyArr) : [];

      return {
        comment: textDisplay,
        name: authorDisplayName,
        profilePic: authorProfileImageUrl,
        reply: reply,
      };
    });

    return comments;
  };

  const replyObj = (arr) => {
    const replies = arr.map((el) => {
      const { textDisplay, authorDisplayName, authorProfileImageUrl } =
        el?.snippet;
      // console.log(authorDisplayName);

      return {
        comment: textDisplay,
        name: authorDisplayName,
        profilePic: authorProfileImageUrl,
        reply: [],
      };
    });

    return replies;
  };
  return { fetchPopularVideo, fetchVideo, fetchComments };
}
