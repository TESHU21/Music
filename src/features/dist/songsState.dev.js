"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteSong = exports.updateSong = exports.addSong = exports.getSongsFailure = exports.getSongsSuccess = exports.getSongsFetch = exports.songsSlice = void 0;

var _iconsMaterial = require("@mui/icons-material");

var _toolkit = require("@reduxjs/toolkit");

var songsSlice = (0, _toolkit.createSlice)({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false
  },
  reducers: {
    getSongsFetch: function getSongsFetch(state) {
      state.isLoading = true;
    },
    getSongsSuccess: function getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsFailure: function getSongsFailure(state) {
      state.isLoading = false;
    },
    addSong: function addSong(state, action) {
      state.songs.push(action.payload);
      console.log(state);
      return state;
    },
    updateSong: function updateSong(state, action) {
      var _action$payload = action.payload,
          id = _action$payload.id,
          updatedSong = _action$payload.updatedSong;
      var songIndex = state.songs.findIndex(function (song) {
        return song.id === id;
      });

      if (songIndex !== -1) {
        state.songs[songIndex] = updatedSong;
      }
    },
    deleteSong: function deleteSong(state, action) {
      state.songs = state.songs.filter(function (song) {
        return song.id !== action.payload;
      });
    }
  }
});
exports.songsSlice = songsSlice;
var _songsSlice$actions = songsSlice.actions,
    getSongsFetch = _songsSlice$actions.getSongsFetch,
    getSongsSuccess = _songsSlice$actions.getSongsSuccess,
    getSongsFailure = _songsSlice$actions.getSongsFailure,
    addSong = _songsSlice$actions.addSong,
    updateSong = _songsSlice$actions.updateSong,
    deleteSong = _songsSlice$actions.deleteSong;
exports.deleteSong = deleteSong;
exports.updateSong = updateSong;
exports.addSong = addSong;
exports.getSongsFailure = getSongsFailure;
exports.getSongsSuccess = getSongsSuccess;
exports.getSongsFetch = getSongsFetch;
var _default = songsSlice.reducer;
exports["default"] = _default;