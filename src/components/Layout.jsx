import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#181818" }}>
      <Header open={open} setOpen={setOpen} />
      <Grid sx={{ height: "100vh" }} container>
        <Grid item sx={{ backgroundColor: "#202020" }}>
          <Sidebar open={open} />
        </Grid>
        <Grid item sx={{ flexGrow: 1, overflowY: "scroll" }} marginTop="4.6rem">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
