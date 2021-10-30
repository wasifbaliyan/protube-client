import { Avatar, Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetails } from "../redux/videoSlice";
import { useParams } from "react-router";
export default function VideoDetails() {
  const dispatch = useDispatch();
  const { videoDetails, status } = useSelector((state) => state.video);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getVideoDetails(id));
  }, [dispatch, id]);
  console.log(videoDetails);
  return (
    <Box sx={{ maxHeight: "100%", overflowY: "scroll" }}>
      {status === "loading" && <CircularProgress color="info" />}
      {status === "success" && (
        <Box width="853px" padding="2rem 1rem">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${videoDetails.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <Box>
            <Typography
              sx={{ color: "white", fontSize: "1.2rem", padding: "10px 0" }}
            >
              {videoDetails.title}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {videoDetails.category && videoDetails.category.toUpperCase()}{" "}
              Music
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            borderBottom="1px solid #333"
          >
            <Button
              sx={{ color: "#fff", mr: ".3rem" }}
              startIcon={<ThumbUpAltOutlinedIcon />}
            >
              Like
            </Button>
            <Button
              sx={{ color: "#fff", mr: ".3rem" }}
              startIcon={<BookmarkBorderOutlinedIcon />}
            >
              Save
            </Button>
            <Button
              sx={{ color: "#fff", mr: ".3rem" }}
              startIcon={<AddBoxOutlinedIcon />}
            >
              Add TO playlist
            </Button>
            <Button
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
      )}
    </Box>
  );
}
