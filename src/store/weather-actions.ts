import { AppDispatch } from "./index";
import { formatQuery } from "../utils/formatters";
import { weatherActions } from "./weather-slice";
import { FetchStatus } from "../models/FetchStatus";

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_API_KEY}`;

// Kelvins make it easier to draw charts, so use default units here :)
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_API_KEY}`;

export const getCurrentWeather = (q: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(weatherActions.setCurrWeatherStatus(FetchStatus.LOADING));
    q = formatQuery(q);
    try {
      const res = await fetch(CURRENT_WEATHER_URL + "&q=" + q);
      if (!res.ok) {
        console.log(res);
        throw new Error(
          res?.status.toString() || "Failed to load current weather"
        );
      }
      const data = await res.json();
      dispatch(weatherActions.setCurrentWeather(data));
      dispatch(
        weatherActions.setArea({
          coords: { lon: data.coord.lon, lat: data.coord.lat },
          name: data.name,
        })
      );
      dispatch(weatherActions.setCurrWeatherStatus(FetchStatus.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(weatherActions.setCurrWeatherStatus(FetchStatus.ERROR));
      if (error instanceof Error) dispatch(weatherActions.setError(error.message));
    }
  };
};

export const getForecast = (coords: { lat: number; lon: number }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(weatherActions.setForecastStatus(FetchStatus.LOADING));
    try {
      const res = await fetch(
        `${FORECAST_URL}&lat=${coords.lat}&lon=${coords.lon}`
      );
      if (!res.ok) {
        console.log(res);
        throw new Error(res?.status.toString() || "Failed to load forecast");
      }
      const data = await res.json();
      dispatch(weatherActions.setForecast(data));
      dispatch(weatherActions.setForecastStatus(FetchStatus.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(weatherActions.setForecastStatus(FetchStatus.ERROR));
    }
  };
};
