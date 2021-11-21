import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  status: "idle",
};

export const getBookmarkedVideos = createAsyncThunk(
  "bookmark/getBookmarkedVideos",
  async () => {
    const { data } = await axios.get("/api/bookmarks");
    return data;
  }
);

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookmarkedVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBookmarkedVideos.fulfilled]: (state, action) => {
      state.status = "success";
      state.videos = action.payload.response.videos;
    },
    [getBookmarkedVideos.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default bookmarkSlice.reducer;
