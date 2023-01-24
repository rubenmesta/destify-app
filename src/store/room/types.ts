import {
  FETCH_ROOM_REQUEST,
  FETCH_ROOM_SUCCESS,
  FETCH_ROOM_FAILED,
} from "./actionTypes";

export interface RoomProps {
  id?: string;
  nickname: string;
  vacationType: string;
  travelStartDate: string;
  travelEndDate: string;
  imageUrl?: string;
  remainingBalance?: number;
  roomDescription?: string;
  booked?: string;
  roomType?: string;
}

export interface RoomState {
  isLoading: boolean;
  rooms: RoomProps[];
  error: string | null;
}

export interface FetchRoomSuccessPayload {
  rooms: RoomProps[];
}

export interface FetchRoomFailurePayload {
  error: string;
}

export interface FetchRoomRequest {
  type: typeof FETCH_ROOM_REQUEST;
}

export type FetchRoomSuccess = {
  type: typeof FETCH_ROOM_SUCCESS;
  payload: FetchRoomSuccessPayload;
};

export type FetchRoomFailure = {
  type: typeof FETCH_ROOM_FAILED;
  payload: FetchRoomFailurePayload;
};

export type RoomActions =
  | FetchRoomRequest
  | FetchRoomSuccess
  | FetchRoomFailure;
