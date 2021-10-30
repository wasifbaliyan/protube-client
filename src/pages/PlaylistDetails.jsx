import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";

export default function PlaylistDetails() {
  return (
    <Grid
      container
      flexWrap="wrap"
      spacing="30"
      padding="2rem"
      sx={{ maxHeight: "100%", overflowY: "scroll" }}
    >
      <Grid item xs={3}>
        <Box>
          <Box>
            <img
              width="100%"
              src="https://i.ytimg.com/vi/B83nmCSwRuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtqJhoe9k1ruNHbtK5L0rgbPr72w"
              alt="thumbnail"
            />
          </Box>
          <Typography sx={{ color: "#FFF", fontSize: "1.3rem", my: "6px" }}>
            Liked Videos
          </Typography>
          <Typography color="gray">3 Videos</Typography>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Stack>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box margin="10px 0" key={item}>
              <Grid container spacing="10">
                <Grid item xs={2}>
                  <img
                    width="100%"
                    src="https://i.ytimg.com/vi/B83nmCSwRuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtqJhoe9k1ruNHbtK5L0rgbPr72w"
                    alt="thumbnail"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Box sx={{ color: "#FFF" }}>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography>
                          Ikko Mikke - Sanu ajkal shisha bada chhed da| Satinder
                          Sartaaj | Aditi S | New Punjabi Song 2020
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton>
                          <DeleteOutlineOutlined
                            fontSize="small"
                            color="error"
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <Typography color="white">T-Series</Typography>
                    <Typography color="gray">Tues Oct 30 2021</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
