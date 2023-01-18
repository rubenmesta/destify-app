import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

export const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [] as string[],
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
