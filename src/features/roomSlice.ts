import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    isLoading: false,
  },
  reducers: {
    getRoomsFetch: (state) => {
      state.isLoading = true;
    },
    getRoomsSucces: (state, action) => {
      state.rooms = action.payload;
      state.isLoading = false;
    },
    getRoomsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getRoomsFetch, getRoomsSucces, getRoomsFailure } =
  roomSlice.actions;

export default roomSlice.reducer;
