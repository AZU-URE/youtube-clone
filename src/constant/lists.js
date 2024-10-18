import { SiYoutubeshorts } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
export const SIDEBAR_LIST1 = [
  {
    name: "Home",
    link: "/",
    icon: <AiFillHome className="w-[1.5rem] h-auto" />,
  },
  {
    name: "Shorts",
    link: "/",
    icon: <SiYoutubeshorts className="w-[1.5rem] h-auto" />,
  },
  {
    name: "Subscriptions",
    link: "/",
    icon: <MdOutlineSubscriptions className="w-[1.5rem] h-auto" />,
  },
];

export const CATEGORY_LIST = [
  { name: "All" },
  { name: "Trending" },
  { name: "Shopping" },
  { name: "Gaming" },
  { name: "Music" },
  { name: "News" },
  { name: "Sports" },
  { name: "Fashion & Beauty" },
  { name: "Podcasts" },
  { name: "Drama" },
  { name: "Movies" },
  { name: "Anime" },
  { name: "Programming" },
  { name: "Web Development" },
];
