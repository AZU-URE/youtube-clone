import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    VideoContainer: [],
  },
  reducers: {
    setVideoContainer: (state, action) => {
      state.VideoContainer = action.payload;
    },
    addVideo: (state, action) => {
      state.VideoContainer.push(action.payload);
    },
  },
});

export default HomeSlice.reducer;
export const { setVideoContainer, addVideo } = HomeSlice.actions;
