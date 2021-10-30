import * as React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";

export default function Sidebar({ handleDrawerClose, open }) {
  return (
    <Box sx={{ width: "240px", mt: "5rem" }}>
      <List sx={{ color: "#fff" }}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon fontSize="medium" htmlColor="#fff" />
              ) : (
                <MailIcon fontSize="medium" htmlColor="#fff" />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ color: "#fff" }}>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon fontSize="medium" htmlColor="#fff" />
              ) : (
                <MailIcon fontSize="medium" htmlColor="#fff" />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
