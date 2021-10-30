import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem, TextField } from "@mui/material";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
export default function Header({ open, setOpen }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Box sx={{ flexGrow: 1 }}>
            <img src="/Protube.png" alt="main logo" width="150px" />
          </Box>

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
            aria-haspopup="true"
            aria-expanded={menuopen ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircle sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuopen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(logout());
                history.push("/");
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
