import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#181818" }}>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} />
    </Box>
  );
}
