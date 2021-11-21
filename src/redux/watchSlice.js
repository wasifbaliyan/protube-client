import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  status: "idle",
};

export const getWatchLaterVideos = createAsyncThunk(
  "watch/getWatchLaterVideos",
  async () => {
    const { data } = await axios.get("/api/watchs");
    return data;
  }
);

export const watchSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {},
  extraReducers: {
    [getWatchLaterVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getWatchLaterVideos.fulfilled]: (state, action) => {
      state.status = "success";
      state.videos = action.payload.response.videos;
    },
    [getWatchLaterVideos.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default watchSlice.reducer;
