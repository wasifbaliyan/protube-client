import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../redux/playlistSlice";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createPlaylist } from "../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Playlists() {
  const { status, playlists } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  async function addNewPlaylist() {
    try {
      const data = await createPlaylist({ name });
      if (data) {
        toast.success("Playlist created successfully");
        dispatch(getPlaylists());
      }
      handleClose();
      setName("");
    } catch (error) {
      toast.error("Something went wrong");

      console.log(error);
    }
  }

  return (
    <>
      {status === "loading" && <CircularProgress />}
      {status === "success" && (
        <Grid
          container
          flexWrap="wrap"
          spacing="30"
          padding="2rem"
          sx={{ maxHeight: "100%", overflowY: "scroll" }}
        >
          {playlists.map((playlist) => (
            <Grid item key={playlist._id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/playlists/${playlist._id}`}
              >
                <Box
                  sx={{
                    width: "300px",
                    height: "150px",
                    background: "#202020",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Typography sx={{ color: "white", fontSize: "1.1rem" }}>
                    {playlist.name.toUpperCase()}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
          <Grid item>
            <Button
              onClick={handleClickOpen}
              variant="text"
              sx={{
                width: "300px",
                height: "150px",
                background: "#202020",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ color: "white", fontSize: "1.1rem" }}>
                ADD NEW PLAYLIST
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Playlist</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Playlist Name"
            type="email"
            fullWidth
            variant="outlined"
            required
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={name.length === 0}
            variant="contained"
            onClick={addNewPlaylist}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
