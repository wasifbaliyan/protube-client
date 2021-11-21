import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  status: "idle",
  videoDetails: {},
  search: "",
};

export const getVideos = createAsyncThunk("video/getVideos", async () => {
  const { data } = await axios.get("/api/videos");
  return data;
});
export const getVideoDetails = createAsyncThunk(
  "video/getVideoDetails",
  async (id) => {
    const { data } = await axios.get("/api/videos/" + id);
    return data;
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload.value;
    },
  },
  extraReducers: {
    [getVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getVideos.fulfilled]: (state, action) => {
      state.status = "success";
      state.videos = action.payload.response.videos;
    },
    [getVideos.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getVideoDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getVideoDetails.fulfilled]: (state, action) => {
      state.status = "success";
      state.videoDetails = action.payload.response.video;
    },
    [getVideoDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default videoSlice.reducer;
export const { setSearch } = videoSlice.actions;
