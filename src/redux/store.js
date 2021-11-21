import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import bookmarkSlice from "./bookmarkSlice";
import likeSlice from "./likeSlice";
import videoSlice from "./videoSlice";
import watchSlice from "./watchSlice";
import historySlice from "./historySlice";
import playlistSlice from "./playlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videoSlice,
    like: likeSlice,
    bookmark: bookmarkSlice,
    watch: watchSlice,
    history: historySlice,
    playlist: playlistSlice,
  },
});
