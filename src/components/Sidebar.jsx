import * as React from "react";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Hidden } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { NavLink } from "react-router-dom";
export default function Sidebar({ handleDrawerClose, open }) {
  return (
    <Box sx={{ width: "100%", mt: "5rem" }}>
      <List sx={{ color: "#fff" }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <HomeOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"Home"} />
            </Hidden>
          </ListItem>
        </NavLink>
        <NavLink
          to="/playlists"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <ExploreOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"Playlists"} />
            </Hidden>
          </ListItem>
        </NavLink>
        <NavLink
          to="/watch-later"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <WatchLaterOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"Watch Later"} />
            </Hidden>
          </ListItem>
        </NavLink>
        <NavLink
          to="/liked"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <ThumbUpAltOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"Liked"} />
            </Hidden>
          </ListItem>
        </NavLink>
        <NavLink
          to="/saved"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <BookmarkBorderOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"Saved"} />
            </Hidden>
          </ListItem>
        </NavLink>
        <NavLink
          to="/history"
          style={{ textDecoration: "none", color: "#fff" }}
          activeStyle={{ backgroundColor: "#eee" }}
        >
          <ListItem button sx={{ margin: "10px 0" }}>
            <ListItemIcon>
              <HistoryOutlinedIcon fontSize="medium" htmlColor="#fff" />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText primary={"History"} />
            </Hidden>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );
}
