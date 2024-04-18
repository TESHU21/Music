import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";
import {
  getSongsFetch,
  deleteSong,
  updateSong,
} from "../../features/songsState";
import store from "../../features/store";
//import "../../shared/global.css";
import SongForm from "../../components/songForm";
import SongList from "../../components/songList";
import { Modal } from "../../features/Modal";
import EditForm from "../../components/editForm";

const Playlist = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const songs = useSelector((store) => store.songs.songs);
  const { isOpen, isupdating } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const [editingSongId, setEditingSongId] = useState(null); // Track the song being edited

  useEffect(() => {
    if (editingSongId) {
      const songToEdit = songs.find((song) => song.id === editingSongId);
      if (songToEdit) {
        setTitle(songToEdit.title);
        setTitle(songToEdit.id);
        setTitle(songToEdit.userId);
      }
    }
    dispatch(getSongsFetch());
  }, [dispatch, editingSongId, songs]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <div className="page-container">
      {isOpen && <SongForm />}
      {isupdating && <EditForm songs={songs} />}
      {<SongList />}
    </div>
  );
};

export default Playlist;
