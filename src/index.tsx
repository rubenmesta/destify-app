import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from './app/store';
import App from "./App";
// import createSagaMiddleware from "@redux-saga/core";
// import { configureStore } from "@reduxjs/toolkit";
// import roomSaga from "./features/roomSaga";
// import roomsReducer from "./features/roomSlice";
import store from "./store";
import "./index.css";
import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";

const container = document.getElementById("root")!;
const root = createRoot(container);

// const saga = createSagaMiddleware();
// const store = configureStore({
//   reducer: {
//     rooms: roomsReducer,
//   },
//   middleware: [saga],
// });
// saga.run(roomSaga);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
