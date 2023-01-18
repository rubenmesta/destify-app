import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getRoomsSucces } from "./roomSlice";

function* getApiData() {
  try {
    // do api call
    // @ts-ignore Type instantiation is excessively deep and possibly infinite
    const rooms = yield call(() =>
      fetch(
        "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=4c0ad727-1652-3b6e-4adb-61c21a17a4b1,ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
        // @ts-ignore Type instantiation is excessively deep and possibly infinite
        {
          headers: {
            Accept: "application/json",
            Authentication: "Bearer Token",
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

// function* workGetRoomsFetch() {
//   // @ts-ignore Type instantiation is excessively deep and possibly infinite
//   const rooms = yield call(() =>
//     fetch(
//       "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=4c0ad727-1652-3b6e-4adb-61c21a17a4b1,ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
//       // @ts-ignore Type instantiation is excessively deep and possibly infinite
//       {
//         headers: {
//           Accept: "application/json",
//           Authentication: "Bearer Token",
//           "x-functions-key":
//             "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
//         },
//       }
//     )
//   );
//   // @ts-ignore Type instantiation is excessively deep and possibly infinite
//   const data = yield rooms.json();
//   yield put(getRoomsSucces(data));
// }

function* roomSaga() {
  yield takeEvery("rooms/getRoomsFetch", getApiData);
}

export default roomSaga;
