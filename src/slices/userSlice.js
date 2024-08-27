import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loginUserInfo } = userSlice.actions;

export default userSlice.reducer;
