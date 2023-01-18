import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import roomReducer from "./reducers/roomSlice";

export const store = configureStore({
  reducer: {
    // room: roomReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
