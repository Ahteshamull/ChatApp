import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { chatInfo } = chatSlice.actions;

export default chatSlice.reducer;
