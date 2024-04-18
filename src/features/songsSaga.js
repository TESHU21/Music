import { put, call, takeEvery } from "redux-saga/effects";
import {
  getSongsSuccess,
  getSongsFetch,
  addSong,
  updateSong,
  deleteSong,
} from "./songsState";

const url = "http://localhost:5000/songs";

function* workGetSongsFetch() {
  try {
    const songs = yield call(fetch, "http://localhost:5000/songs");
    const formattedSongs = yield songs.json();
    const formattedSongsShortened = formattedSongs.slice(0, 10);
    yield put(getSongsSuccess(formattedSongsShortened));
    // Additional code logic here
  } catch (error) {
    console.error("Error getting songs:", error);
    // Handle error if needed
  }
}

function* createSong(action) {
  try {
    const response = yield call(fetch, "http://localhost:5000/songs", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newSong = yield response.json();
    yield put(addSong(newSong));
  } catch (error) {
    console.error("Error creating song:", error);
    // Handle error if needed
  }
}

function* updateSongAsync(action) {
  try {
    const { id, ...updatedSong } = action.payload;
    const response = yield call(fetch, `http://localhost:5000/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedSong),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedSongData = yield response.json();
    yield put(updateSong(updatedSongData));
  } catch (error) {
    console.error("Error updating song:", error);
    // Handle error if needed
  }
}

function* deleteSongAsync(action, id) {
  try {
    yield call(fetch, `http://localhost:5000/songs/${action.id}`, {
      method: "DELETE",
    });
    yield put(deleteSong(action.id));
  } catch (error) {
    console.error("Error deleting song:", error);
    // Handle error if needed
  }
}

function* songsSaga() {
  yield takeEvery(getSongsFetch.type, workGetSongsFetch);
  yield takeEvery("songs/createSong", createSong);
  yield takeEvery("songs/updateSong", updateSongAsync);
  yield takeEvery("songs/deleteSong", deleteSongAsync);
}

export default songsSaga;
