import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  status: "idle",
  user: {},
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    const { data } = await axios.post("/auth/login", userData);
    return data;
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const { data } = await axios.post("/auth/register", userData);
    return data;
  }
);

export const getUser = createAsyncThunk("auth/getUser", async () => {
  const { data } = await axios.get("/auth/self");
  return data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      state.isLoggedIn = false;
      axios.defaults.headers.common["authorization"] = null;
    },
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, name, email, isLoggedIn: true })
      );
      state.isLoggedIn = true;
      toast.success("Login successfull");
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "failed";
      toast.error("Login failed. Please try again");
    },

    [registerUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, name, email, isLoggedIn: true })
      );

      state.isLoggedIn = true;
      toast.success("User registered successfull");
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
      toast.error("Registration failed. Please try again");
    },

    [getUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.response;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
