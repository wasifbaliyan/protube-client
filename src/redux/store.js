import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import videoSlice from "./videoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videoSlice,
  },
});
