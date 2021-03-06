import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Bookmarks from "./pages/Bookmarks";
import History from "./pages/History";
import Home from "./pages/Home";
import LikedVideos from "./pages/LikedVideos";
import Login from "./pages/Login";
import PlaylistDetails from "./pages/PlaylistDetails";
import Playlists from "./pages/Playlists";
import VideoDetails from "./pages/VideoDetails";
import WatchLater from "./pages/WatchLater";
import { setAuth } from "./redux/authSlice";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if ("login" in localStorage) {
      const login = JSON.parse(localStorage.getItem("login"));
      axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ToastContainer autoClose={1500} />
      <Switch>
        <PrivateRoute exact path="/playlists">
          <Layout>
            <Playlists />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/playlists/:id">
          <Layout>
            <PlaylistDetails />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/liked">
          <Layout>
            <LikedVideos />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/watch-later">
          <Layout>
            <WatchLater />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/saved">
          <Layout>
            <Bookmarks />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/history">
          <Layout>
            <History />
          </Layout>
        </PrivateRoute>
        <Route exact path="/videos/:id">
          <Layout>
            <VideoDetails />
          </Layout>
        </Route>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
