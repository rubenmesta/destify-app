import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchRoomFailure, fetchRoomSuccess } from "./actions";
import { FETCH_ROOM_REQUEST } from "./actionTypes";
import { RoomProps } from "./types";

const room1Id = "4c0ad727-1652-3b6e-4adb-61c21a17a4b1";
const room2Id = "ceae0d77-2fd6-dbe3-0f33-61c355c106ff";

const getRooms = () =>
  axios.get<RoomProps[]>(
    `https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=${room1Id},${room2Id}`,
    {
      headers: {
        Accept: "application/json",
        Authentication: "Bearer Token",
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        "x-functions-key":
          "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
      },
    }
  );
/*
  Worker Saga: Fired on FETCH_ROOM_REQUEST action
*/
function* fetchRoomSaga(): any {
  try {
    const response = yield call(getRooms);

    yield put(
      fetchRoomSuccess({
        rooms: response.data,
      })
    );
  } catch (error: any) {
    yield put(
      fetchRoomFailure({
        error: error.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ROOM_REQUEST` action.
  Allows concurrent increments.
*/
function* roomSaga() {
  yield all([takeLatest(FETCH_ROOM_REQUEST, fetchRoomSaga)]);
}

export default roomSaga;
