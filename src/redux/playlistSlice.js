import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playlists: [],
  status: "idle",
  playlistDetails: {},
};

export const getPlaylists = createAsyncThunk(
  "playlist/getPlaylists",
  async () => {
    const { data } = await axios.get("/api/playlists");
    return data;
  }
);

export const getPlaylistDetails = createAsyncThunk(
  "playlist/getPlaylistDetails",
  async (id) => {
    const { data } = await axios.get("/api/playlists/" + id);
    return data;
  }
);

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlaylists.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPlaylists.fulfilled]: (state, action) => {
      state.status = "success";
      state.playlists = action.payload.response.playlists;
    },
    [getPlaylists.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getPlaylistDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPlaylistDetails.fulfilled]: (state, action) => {
      state.status = "success";
      state.playlistDetails = action.payload.response.playlist;
    },
    [getPlaylistDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default playlistSlice.reducer;
