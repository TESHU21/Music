import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, openUpdateForm } from "../features/modalSlice";
import { getSongsFetch, deleteSong, updateSong } from "../features/songsState";
import store from "../features/store";
//import "../shared/global.css";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SongList = () => {
  const songs = useSelector((store) => store.songs.songs);
  const dispatch = useDispatch();
  //const [editingSong, setEditingSong] = useState(""); // Track the song being edited

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  //console.log(songs);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Create Song
      </button>
      <h2>List of Songs</h2>
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.id}</p>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(song.id)}
          >
            <DeleteIcon />
          </IconButton>
          <button
            onClick={() => {
              dispatch(openUpdateForm());
            }}
          >
            Edit Song
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
