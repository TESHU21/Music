"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.closeUpdateForm = exports.openUpdateForm = exports.closeModal = exports.openModal = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  isOpen: false,
  isupdating: false
};
var modalSlice = (0, _toolkit.createSlice)({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: function openModal(state, action) {
      state.isOpen = true;
    },
    closeModal: function closeModal(state, action) {
      state.isOpen = false;
    },
    openUpdateForm: function openUpdateForm(state, action) {
      state.isupdating = true;
    },
    closeUpdateForm: function closeUpdateForm(state, action) {
      state.isupdating = false;
    }
  }
});
var _modalSlice$actions = modalSlice.actions,
    openModal = _modalSlice$actions.openModal,
    closeModal = _modalSlice$actions.closeModal,
    openUpdateForm = _modalSlice$actions.openUpdateForm,
    closeUpdateForm = _modalSlice$actions.closeUpdateForm;
exports.closeUpdateForm = closeUpdateForm;
exports.openUpdateForm = openUpdateForm;
exports.closeModal = closeModal;
exports.openModal = openModal;
var _default = modalSlice.reducer;
exports["default"] = _default;