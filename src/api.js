import axios from "axios";

export const addToLikes = async (data) => {
  const response = await axios.post("/api/likes", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromLikedVideos = async (data) => {
  const response = await axios.delete("/api/likes/" + data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const addToBookmarks = async (data) => {
  const response = await axios.post("/api/bookmarks", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromBookmarks = async (data) => {
  const response = await axios.delete("/api/bookmarks/" + data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const addToWatch = async (data) => {
  const response = await axios.post("/api/watchs", data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromWatch = async (data) => {
  const response = await axios.delete("/api/watchs/" + data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const addToHistory = async (data) => {
  const response = await axios.post("/api/history/" + data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const removeFromHistory = async (data) => {
  const response = await axios.delete("/api/history/" + data);
  if (!response.statusText === "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};
