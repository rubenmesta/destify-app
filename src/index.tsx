import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from './app/store';
import App from "./App";
import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import roomSaga from "./features/roomSaga";
import roomsReducer from "./features/roomSlice";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
  middleware: [saga],
});
saga.run(roomSaga);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
