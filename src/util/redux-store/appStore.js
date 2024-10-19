import { configureStore } from "@reduxjs/toolkit";
import HOME_REDUCER from "./HomeSlice";
import BODY_REDUCER from "./BodySlice";
const appStore = configureStore({
  reducer: {
    home: HOME_REDUCER,
    body: BODY_REDUCER,
  },
});

export default appStore;
