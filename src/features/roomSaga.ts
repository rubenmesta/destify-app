import { call, put, takeEvery } from "redux-saga/effects";
import { getRoomsSucces } from "./roomSlice";

const room1Id = "4c0ad727-1652-3b6e-4adb-61c21a17a4b1";
const room2Id = "ceae0d77-2fd6-dbe3-0f33-61c355c106ff";

function* getApiData() {
  try {
    // @ts-ignore Type instantiation is excessively deep and possibly infinite
    const rooms = yield call(() =>
      fetch(
        `https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=${room1Id},${room2Id}`,
        // @ts-ignore Type instantiation is excessively deep and possibly infinite
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
      )
    );
    // @ts-ignore Type instantiation is excessively deep and possibly infinite
    const data = yield rooms.json();
    yield put(getRoomsSucces(data));
  } catch (e) {
    console.log(e);
  }
}

function* roomSaga() {
  yield takeEvery("rooms/getRoomsFetch", getApiData);
}

export default roomSaga;
