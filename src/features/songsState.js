import { TodayOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
      console.log(state);
      return state;
    },
    updateSong: (state, action) => {
      const { id, updatedSong } = action.payload;
      const songIndex = state.songs.findIndex((song) => song.id === id);
      if (songIndex !== -1) {
        state.songs[songIndex] = updatedSong;
      }
    },
    deleteSong: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSong,
  updateSong,
  deleteSong,
} = songsSlice.actions;

export default songsSlice.reducer;
