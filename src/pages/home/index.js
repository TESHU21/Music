import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch, addSong, deleteSong } from "../../features/songsState";
import store from "../../features/store";
import "../../shared/global.css";
import SongForm from "../../components/songForm";

const Home = () => {
  const songs = useSelector((store) => store.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);
  const handleSongadd = () => {
    return <SongForm />;
  };

  return (
    <div className="page-container">
      <h2>Add Song</h2>
      <button onClick={handleSongadd}> Create Song</button>
    </div>
  );
};

export default Home;
