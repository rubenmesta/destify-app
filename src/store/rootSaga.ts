import { all, fork } from "redux-saga/effects";

import roomSaga from "./room/sagas";

export function* rootSaga() {
  yield all([fork(roomSaga)]);
}
