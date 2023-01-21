import { combineReducers } from "redux";
// import { createSelector } from "reselect";

import roomReducer from "./room/reducer";

const rootReducer = combineReducers({
  rooms: roomReducer,

  // NOTE: other app reducers go here
});
export type StoreState = ReturnType<typeof rootReducer>;

// const getRooms = (state: StoreState) => state.rooms.rooms;

// export const getRoomsSelector = createSelector(getRooms, (rooms) => rooms);

export default rootReducer;
