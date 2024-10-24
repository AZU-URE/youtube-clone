import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    suggestion: [],
    cache: {},
    showSuggestion: false,
    resultVideo: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSuggestion(state, action) {
      state.suggestion = action.payload;
    },
    setCache(state, action) {
      state.cache = { ...action.payload, ...state.cache };
    },
    setShowSuggestion(state, action) {
      state.showSuggestion = action.payload;
    },
    setResultVideo(state, action) {
      state.resultVideo = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const {
  setSearchQuery,
  setSuggestion,
  setCache,
  setShowSuggestion,
  setResultVideo,
} = searchSlice.actions;
