import { configureStore } from "@reduxjs/toolkit";
import HOME_REDUCER from "./HomeSlice";
import BODY_REDUCER from "./BodySlice";
import SEARCH_REDUCER from "./searchSlice";
import WATCH_REDUCER from "./watchSlice";
const appStore = configureStore({
  reducer: {
    home: HOME_REDUCER,
    body: BODY_REDUCER,
    search: SEARCH_REDUCER,
    watch: WATCH_REDUCER,
  },
});

export default appStore;
