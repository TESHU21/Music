import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong, updateSong } from "../features/songsState";
import { TextField, Button } from "@mui/material";
import { closeModal } from "../features/modalSlice";

const SongForm = (song) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(song ? song.title : "");
  const [userId, setUserId] = useState(song ? song.userId : "");
  const [id, setId] = useState(song ? song.id : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSong({ userId, title, id }));
    dispatch(closeModal());

    setTitle("");
    setId("");
    setUserId("");
  };
  const handlecloseForm = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  return (
    <form>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        fullWidth
      />
      <TextField
        label="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Add Song
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handlecloseForm}
      >
        Cancel
      </Button>
    </form>
  );
};

export default SongForm;
