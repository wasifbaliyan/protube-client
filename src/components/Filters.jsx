import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Filters() {
  return (
    <Box
      borderTop="1px solid #333"
      borderBottom="1px solid #333"
      padding="10px"
      backgroundColor="#202020"
    >
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip  color="info" label="Indie Music" />
        <Chip color="warning" variant="outlined" label="Bollywood Music" />
        <Chip color="warning" variant="outlined" label="Lofi Music" />
        <Chip color="warning" variant="outlined" label="Chill Music" />
        <Chip color="warning" variant="outlined" label="Dream Pop Music" />
      </Stack>
    </Box>
  );
}
