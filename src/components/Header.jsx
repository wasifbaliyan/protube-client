import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, Menu, MenuItem, TextField } from "@mui/material";
import { logout } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { setSearch } from "../redux/videoSlice";

export default function Header({ open, setOpen }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { search } = useSelector((state) => state.video);
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
  React.useEffect(() => {
    if (search.length !== 0) {
      history.push("/");
    }
  }, [search, history]);

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
            <img src="/Protube-main.png" alt="main logo" width="150px" />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <TextField
              onChange={(e) => dispatch(setSearch({ value: e.target.value }))}
              sx={{ color: "#fff", backgroundColor: "#121212", width: "350px" }}
              variant="outlined"
              type="search"
              placeholder="Search"
              InputProps={{
                style: {
                  color: "#fff",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon htmlColor="gray" />
                  </InputAdornment>
                ),
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
            {isLoggedIn ? (
              <MenuItem
                onClick={() => {
                  dispatch(logout());
                  history.push("/");
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <MenuItem>Sign In</MenuItem>
              </Link>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
