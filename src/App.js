// import Layout from "./components/Layout";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PlaylistDetails from "./pages/PlaylistDetails";
import Playlists from "./pages/Playlists";
import VideoDetails from "./pages/VideoDetails";
import { setAuth } from "./redux/authSlice";

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
  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      // dispatch(getWishlist());
      // dispatch(getCart());
      // dispatch(getUser());
    }
  }, [dispatch, isLoggedIn]);
  return (
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
          <PlaylistDetails />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/watch-later">
        <Layout>
          <PlaylistDetails />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/saved">
        <Layout>
          <PlaylistDetails />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/history">
        <Layout>
          <PlaylistDetails />
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
    // <Layout>
    //   <Home />
    // </Layout>
    // <Login />
  );
}

export default App;
//   {/* <VideoDetails /> */}
//   {/* <Playlists /> */}
//   <PlaylistDetails />
