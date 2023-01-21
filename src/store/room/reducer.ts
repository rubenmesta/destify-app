import { RoomActions, RoomState } from "./types";
import {
  FETCH_ROOM_REQUEST,
  FETCH_ROOM_SUCCESS,
  FETCH_ROOM_FAILED,
} from "./actionTypes";
import { StoreState } from "../rootReducer";

const initialState: RoomState = {
  pending: false,
  rooms: [],
  error: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: RoomActions) => {
  switch (action.type) {
    case FETCH_ROOM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ROOM_SUCCESS:
      return {
        ...state,
        pending: false,
        rooms: action.payload.rooms,
        error: null,
      };
    case FETCH_ROOM_FAILED:
      return {
        ...state,
        pending: false,
        rooms: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
