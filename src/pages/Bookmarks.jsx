import {
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { getBookmarkedVideos } from "../redux/bookmarkSlice";
import { removeFromBookmarks } from "../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Bookmarks() {
  const dispatch = useDispatch();
  const { videos, status } = useSelector((state) => state.bookmark);
  useEffect(() => {
    dispatch(getBookmarkedVideos());
  }, [dispatch]);

  async function handleRemove(id, e) {
    e.preventDefault();

    try {
      const confirmaton = window.confirm(
        "Are you sure you want to remove this?"
      );
      if (!confirmaton) return;

      const res = await removeFromBookmarks(id);
      if (res) {
        toast.success("Video removed from bookmarks");
        dispatch(getBookmarkedVideos());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      {status === "loading" && (
        <Box display="flex" justifyContent="center" width="inherit" pt="1rem">
          <CircularProgress color="info" />
        </Box>
      )}
      {status === "success" && (
        <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
          <Box px="1rem" pt="1rem">
            <Typography sx={{ color: "#eee" }} variant="h5">
              Bookmarked Videos
            </Typography>
            <Typography sx={{ color: "#ccc" }} variant="h6">
              {videos.length} Videos
            </Typography>
          </Box>
          <Stack sx={{ p: "1rem" }}>
            {videos.map((video) => (
              <Box margin="10px 0" key={video._id}>
                <Link
                  to={video.videoId && `/videos/${video.videoId._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Grid container spacing="10">
                    <Grid item xs={12} md={3} lg={2}>
                      <img
                        width="100%"
                        src={video.videoId && video.videoId.thumbnail_url}
                        alt="thumbnail"
                      />
                    </Grid>
                    <Grid item xs={12} md={9} lg={10}>
                      <Box sx={{ color: "#FFF", display: "flex" }}>
                        <Typography>
                          {video.videoId && video.videoId.title}
                        </Typography>
                        <IconButton
                          onClick={(e) => handleRemove(video.videoId._id, e)}
                          sx={{ ml: ".8rem" }}
                        >
                          <DeleteOutlineOutlined
                            fontSize="small"
                            color="error"
                          />
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography color="white">
                          {video.videoId && video.videoId.author_name}
                        </Typography>
                        <Typography color="gray">Tues Oct 30 2021</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
}
