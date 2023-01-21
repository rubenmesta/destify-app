import { createSelector } from "reselect";

import { StoreState } from "../rootReducer";

const getPending = (state: StoreState) => state.rooms.pending;

const getRooms = (state: StoreState) => state.rooms.rooms;

const getError = (state: StoreState) => state.rooms.error;

export const getRoomsSelector = createSelector(getRooms, (rooms) => rooms);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
