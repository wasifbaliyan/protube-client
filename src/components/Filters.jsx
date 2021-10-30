import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
const CATEGORIES = [
  "all",
  "punjabi",
  "emorap",
  "pop",
  "bollywood",
  "electronic",
];

export default function Filters({ filter, setFilter }) {
  return (
    <Box
      borderTop="1px solid #333"
      borderBottom="1px solid #333"
      padding="10px"
      backgroundColor="#202020"
    >
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {CATEGORIES.map((category) => (
          <Chip
            onClick={() => setFilter(category)}
            color="info"
            variant={filter === category ? "filled" : "outlined"}
            label={category.toUpperCase() + ` MUSIC`}
          />
        ))}
      </Stack>
    </Box>
  );
}
