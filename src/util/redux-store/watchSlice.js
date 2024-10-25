import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
  name: "watch",
  initialState: { liveChat: [], comment: [] },
  reducers: {
    addLiveChat(state, action) {
      state.liveChat.splice(10, 1);
      state.liveChat.unshift(action.payload);
    },
    setComment(state, action) {
      state.comment = action.payload;
    },
  },
});

export const { addLiveChat, setComment } = watchSlice.actions;
export default watchSlice.reducer;
