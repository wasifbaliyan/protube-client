import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Video from "../components/Video";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../redux/videoSlice";
import { Box } from "@mui/system";

export default function Home() {
  const { search } = useSelector((state) => state.video);

  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const { videos, status } = useSelector((state) => state.video);
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  function getFilteredVideos() {
    if (filter === "all") {
      return videos;
    } else {
      return videos.filter((video) => video.category === filter);
    }
  }

  function getQueriedVideos() {
    return getFilteredVideos().filter((video) =>
      video.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} />
      <Grid
        container
        flexWrap="wrap"
        sx={{ maxHeight: "100%", overflowY: "scroll" }}
        spacing="30"
        padding="2rem"
      >
        {status === "loading" && (
          <Box display="flex" justifyContent="center" width="inherit" pt="1rem">
            <CircularProgress color="info" />
          </Box>
        )}
        {status === "success" &&
          getQueriedVideos().map((video) => (
            <Grid item key={video._id}>
              <Video video={video} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
