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
import { getLikedVideos } from "../redux/likeSlice";
import { removeFromLikedVideos } from "../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function LikedVideos() {
  const dispatch = useDispatch();
  const { videos, status } = useSelector((state) => state.like);
  useEffect(() => {
    dispatch(getLikedVideos());
  }, [dispatch]);

  async function handleRemove(id) {
    try {
      const confirmaton = window.confirm(
        "Are you sure you want to remove this?"
      );
      if (!confirmaton) return;

      const res = await removeFromLikedVideos(id);
      if (res) {
        toast.success("Video removed successfully");

        dispatch(getLikedVideos());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      {status === "loading" && <CircularProgress />}
      {status === "success" && (
        <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
          <Box px="1rem" pt="1rem">
            <Typography sx={{ color: "#eee" }} variant="h5">
              Liked Videos
            </Typography>
            <Typography sx={{ color: "#ccc" }} variant="h6">
              {videos.length} Videos
            </Typography>
          </Box>
          <Stack sx={{ p: "1rem" }}>
            {videos.map((video) => (
              <Box margin="10px 0" key={video._id}>
                <Link
                  to={`/videos/${video.videoId._id}`}
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
                          onClick={() => handleRemove(video.videoId._id)}
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
