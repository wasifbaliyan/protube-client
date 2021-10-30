import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function Video({ video }) {
  return (
    <Link to={`/videos/${video._id}`} style={{ textDecoration: "none" }}>
      <Box width="300px">
        <Box>
          <img width="100%" src={video.thumbnail_url} alt="thumbnail" />
        </Box>
        <Grid container>
          <Grid item xs={2}>
            <Avatar
              sx={{ my: "5px" }}
              src={video.thumbnail_url}
              alt={video.author_name}
            />
          </Grid>
          <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
              <Typography sx={{ py: "5px" }} color="white">
                {video.title}
              </Typography>
              <IconButton>
                <MoreVertIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
            <Typography color="gray">{video.author_name}</Typography>
            <Typography color="gray">
              {video.category.toUpperCase()} Music
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}
