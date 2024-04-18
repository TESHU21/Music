import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSong } from "../features/songsState";
import { closeUpdateForm } from "../features/modalSlice";

const EditForm = ({ songs }) => {
  //const songs = useSelector((store) => store.songs.songs);

  const dispatch = useDispatch();
  const [editedSong, setEditedSong] = useState(songs);
  // const [editedSong, setEditedSong] = useState({
  //   title: songs.title,
  //   userId: songs.userId,
  //   id: songs.id,
  // });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSong({ ...editedSong, [name]: value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateSong({ id: editedSong.id, updatedSong: editedSong }));
    dispatch(closeUpdateForm());
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(closeUpdateForm());
  };

  return (
    <div>
      <h3>Edit Song</h3>
      <input
        type="text"
        name="title"
        value={editedSong.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="userId"
        value={editedSong.userId}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="id"
        value={editedSong.id}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditForm;
