import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetails } from "../redux/videoSlice";
import { useParams } from "react-router";
import {
  addToBookmarks,
  addToHistory,
  addToLikes,
  addToWatch,
  addVideoToPlaylist,
} from "../api";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { getPlaylists } from "../redux/playlistSlice";
import { toast } from "react-toastify";

export default function VideoDetails() {
  const dispatch = useDispatch();
  const { videoDetails, status } = useSelector((state) => state.video);
  const { playlists, status: playlistStatus } = useSelector(
    (state) => state.playlist
  );
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getVideoDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  useEffect(() => {
    async function addVideoToHistory() {
      await addToHistory(id);
    }
    addVideoToHistory();
  }, [id]);

  async function handleLike() {
    try {
      const response = await addToLikes({ id });
      if (response) {
        toast.success("Added to liked videos");
      }
    } catch (error) {
      toast.error("Already exists in the playlist");

      console.log(error);
    }
  }

  async function handleBookmark() {
    try {
      const response = await addToBookmarks({ id });
      if (response) {
        toast.success("Video added to the playlist");
      }
    } catch (error) {
      toast.error("Already exists in the playlist");

      console.log(error);
    }
  }
  async function handleWatchLater() {
    try {
      const response = await addToWatch({ id });
      if (response) {
        toast.success("Video added to the playlist");
      }
    } catch (error) {
      toast.error("Already exists in the playlist");

      console.log(error);
    }
  }

  async function handleAddToPlaylist(playlistId) {
    try {
      const response = await addVideoToPlaylist({ id, playlistId });
      if (response) {
        toast.success("Video added to the playlist");
        handleClose();
      }
    } catch (error) {
      toast.error("Already exists in the playlist");

      console.log(error);
    }
  }

  return (
    <>
      <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
        {status === "loading" && (
          <Box display="flex" justifyContent="center" width="inherit" pt="1rem">
            <CircularProgress color="info" />
          </Box>
        )}
        {status === "success" && (
          <Grid container>
            <Grid item xs={12} md={10}>
              <Box padding="2rem 1rem">
                <iframe
                  style={{ height: "480px", width: "100%" }}
                  src={`https://www.youtube.com/embed/${videoDetails.youtube_id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      padding: "10px 0",
                    }}
                  >
                    {videoDetails.title}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {videoDetails.category &&
                      videoDetails.category.toUpperCase()}{" "}
                    Music
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="flex-end"
                  borderBottom="1px solid #333"
                >
                  <Button
                    onClick={handleLike}
                    sx={{ color: "#fff", mr: ".3rem" }}
                    startIcon={<ThumbUpAltOutlinedIcon />}
                  >
                    Like
                  </Button>
                  <Button
                    onClick={handleBookmark}
                    sx={{ color: "#fff", mr: ".3rem" }}
                    startIcon={<BookmarkBorderOutlinedIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ color: "#fff", mr: ".3rem" }}
                    startIcon={<AddBoxOutlinedIcon />}
                  >
                    Add TO playlist
                  </Button>
                  <Button
                    onClick={handleWatchLater}
                    sx={{ color: "#fff", mr: ".3rem" }}
                    startIcon={<WatchLaterOutlinedIcon />}
                  >
                    Add To watch Later
                  </Button>
                </Box>
                <Box borderBottom="1px solid #333">
                  <Box paddingTop="10px" display="flex" alignItems="center">
                    <Avatar
                      src={videoDetails.thumbnail_url}
                      alt={videoDetails.author_name}
                    />
                    <Typography color="white" fontSize="1.2rem" ml=".5rem">
                      {videoDetails.author_name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add Video To Playlist</DialogTitle>
        {playlistStatus === "loading" && <CircularProgress />}
        <List sx={{ pt: 0 }}>
          {playlistStatus === "success" &&
            playlists.map((playlist) => (
              <ListItem
                onClick={() => handleAddToPlaylist(playlist._id)}
                button
                key={playlist._id}
              >
                <ListItemText primary={playlist.name} />
              </ListItem>
            ))}
        </List>
      </Dialog>
    </>
  );
}
