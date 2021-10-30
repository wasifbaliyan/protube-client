import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Playlists() {
  return (
    <Grid
      container
      flexWrap="wrap"
      spacing="30"
      padding="2rem"
      sx={{ maxHeight: "100%", overflowY: "scroll" }}
    >
      {["Likes", "Watch Later", "History", "Wasif's Playlist", "others"].map(
        (playlist) => (
          <Grid item key={playlist}>
            <Box
              sx={{
                width: "300px",
                height: "150px",
                background: "#202020",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{ color: "white", fontSize: "1.1rem" }}
                key={playlist}
              >
                {playlist.toUpperCase()}
              </Typography>
            </Box>
          </Grid>
        )
      )}
    </Grid>
  );
}
