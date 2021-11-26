// see https://redux.js.org/usage/usage-with-typescript !!!!!!

import { configureStore } from "@reduxjs/toolkit";
import userLocationSlice from "./userlocation-slice";
import weatherSlice from "./weather-slice";

const store = configureStore({
  reducer: {
    userLocation: userLocationSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export default store;

// // Infer the `RootState` and `AppDispatch` types from the store itself:

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
