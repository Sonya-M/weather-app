import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";

interface WeatherState {
  area: string;
  currentWeather: CurrentData | null;
  forecast: ForecastData | null;
}

const initialState: WeatherState = {
  area: "",
  currentWeather: null,
  forecast: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setArea(state, action: PayloadAction<string>) {
      state.area = action.payload;
    },
    setCurrentWeather(state, action: PayloadAction<CurrentData>) {
      state.currentWeather = action.payload;
    },
    setForecast(state, action: PayloadAction<ForecastData>) {
      state.forecast = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice;
