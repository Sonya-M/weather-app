import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";
import { FetchStatus } from "../models/FetchStatus";
import { LocationData } from "../models/LocationData";

interface WeatherState {
  area: LocationData | null;
  currentWeather: CurrentData | null;
  forecast: ForecastData | null;
  currWeatherStatus: FetchStatus | null;
  forecastStatus: FetchStatus | null;
  error: string | null; // status not enough, need this to know the exact error
}

const initialState: WeatherState = {
  area: null,
  currentWeather: null,
  forecast: null,
  currWeatherStatus: null,
  forecastStatus: null,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setArea(state, action: PayloadAction<LocationData>) {
      state.area = action.payload;
    },
    setCurrentWeather(state, action: PayloadAction<CurrentData>) {
      state.currentWeather = action.payload;
    },
    setForecast(state, action: PayloadAction<ForecastData>) {
      state.forecast = action.payload;
    },
    setCurrWeatherStatus(state, action: PayloadAction<FetchStatus>) {
      state.currWeatherStatus = action.payload;
    },
    setForecastStatus(state, action: PayloadAction<FetchStatus>) {
      state.forecastStatus = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice;
