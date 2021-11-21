import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

if ("login" in localStorage) {
  const login = JSON.parse(localStorage.getItem("login"));
  axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
}

console.log(
  "Hey Developer,\n\nHope you're doing fine.\nThanks for stopping by.\n\n@wasifbaliyan"
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
