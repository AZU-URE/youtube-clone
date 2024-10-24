export const MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API}`;
export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;
export const KEY = `key=${process.env.REACT_APP_YOUTUBE_API}`;
