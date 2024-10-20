import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    suggestion: [],
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setSuggestion(state, action) {
      state.suggestion = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchQuery, setSuggestion } = searchSlice.actions;
