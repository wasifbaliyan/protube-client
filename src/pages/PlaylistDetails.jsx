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
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistDetails } from "../redux/playlistSlice";
import { removeVideoFromPlaylist } from "../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function PlaylistDetails() {
  const { id } = useParams();
  const { playlistDetails, playlistStatus } = useSelector(
    (state) => state.playlist
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistDetails(id));
  }, [dispatch, id]);

  async function handleRemove(videoId, e) {
    e.preventDefault();
    try {
      const confirmaton = window.confirm(
        "Are you sure you want to remove this?"
      );
      if (!confirmaton) return;

      const res = await removeVideoFromPlaylist({
        playlistId: id,
        id: videoId,
      });
      if (res) {
        toast.success("Video removed successfully");
        dispatch(getPlaylistDetails(id));
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      {playlistStatus === "loading" && (
        <Box display="flex" justifyContent="center" width="inherit" pt="1rem">
          <CircularProgress color="info" />
        </Box>
      )}
      {playlistStatus === "success" && (
        <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
          <Box px="1rem" pt="1rem">
            <Typography sx={{ color: "#eee" }} variant="h5">
              {playlistDetails.name} Videos
            </Typography>
            <Typography sx={{ color: "#ccc" }} variant="h6">
              {playlistDetails.videos.length} Videos
            </Typography>
          </Box>
          <Stack sx={{ p: "1rem" }}>
            {playlistDetails.videos.map((video) => (
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
