import { GeolocationData } from "../models/GeolocationData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { FetchStatus } from "../models/FetchStatus";

interface UserLocationState {
  location: GeolocationData | null;
  blocked: boolean | null;
  status: FetchStatus | null;
}

const initialState: UserLocationState = {
  location: null,
  blocked: null,
  status: null,
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setUserLocation(state, action: PayloadAction<GeolocationData>) {
      state.location = action.payload;
    },
    setUserBlocked(state, action: PayloadAction<boolean>) {
      state.blocked = action.payload;
    },
    setStatus(state, action: PayloadAction<FetchStatus>) {
      state.status = action.payload;
    },
  },
});

export const userLocationActions = userLocationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLocation = (state: RootState) => state.userLocation;

export default userLocationSlice;
