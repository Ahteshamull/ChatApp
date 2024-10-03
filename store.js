import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./src/slices/userSlice";
import chatSlice from "./src/slices/chatSlice";





export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    chatIngInfo: chatSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
