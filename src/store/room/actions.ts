import {
  FETCH_ROOM_REQUEST,
  FETCH_ROOM_SUCCESS,
  FETCH_ROOM_FAILED,
} from "./actionTypes";

import {
  FetchRoomRequest,
  FetchRoomSuccess,
  FetchRoomSuccessPayload,
  FetchRoomFailure,
  FetchRoomFailurePayload,
} from "./types";

export const fetchRoomRequest = (): FetchRoomRequest => ({
  type: FETCH_ROOM_REQUEST,
});

export const fetchRoomSuccess = (
  payload: FetchRoomSuccessPayload
): FetchRoomSuccess => ({
  type: FETCH_ROOM_SUCCESS,
  payload,
});

export const fetchRoomFailure = (
  payload: FetchRoomFailurePayload
): FetchRoomFailure => ({
  type: FETCH_ROOM_FAILED,
  payload,
});
