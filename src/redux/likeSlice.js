import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  status: "idle",
};

export const getLikedVideos = createAsyncThunk(
  "like/getLikedVideos",
  async () => {
    const { data } = await axios.get("/api/likes");
    return data;
  }
);

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: {
    [getLikedVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLikedVideos.fulfilled]: (state, action) => {
      state.status = "success";
      state.videos = action.payload.response.videos;
    },
    [getLikedVideos.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default likeSlice.reducer;
