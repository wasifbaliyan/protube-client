import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  status: "idle",
};

export const getHistoryVideos = createAsyncThunk(
  "history/getHistoryVideos",
  async () => {
    const { data } = await axios.get("/api/history");
    return data;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [getHistoryVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getHistoryVideos.fulfilled]: (state, action) => {
      state.status = "success";
      state.videos = action.payload.response.videos;
    },
    [getHistoryVideos.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default historySlice.reducer;
