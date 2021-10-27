import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function Header({ open, setOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#202020",
          padding: ".3rem 0",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Protube
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              sx={{ color: "#fff", backgroundColor: "#121212", width: "350px" }}
              variant="outlined"
              type="search"
              placeholder="Search"
              inputProps={{
                style: {
                  color: "#fff",
                  padding: "12px",
                  fontSize: "1.2rem",
                },
              }}
            />
          </Box>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
