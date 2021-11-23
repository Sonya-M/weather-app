import { formatQuery } from "../utils/formatters";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_API_KEY}`;

// const FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?units=metric&appid=${process.env.REACT_APP_API_KEY}`;

// const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}`;

// Kelvins make it easier to draw charts, so use default units here :)
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_API_KEY}`;

// leave error catching to caller

export async function getCurrentWeather(q: string): Promise<CurrentData> {
  // keep your precious api calls until ready
  // return Promise.resolve(DUMMY_CURRENT_WEATHER);

  q = formatQuery(q);
  const res = await fetch(CURRENT_WEATHER_URL + "&q=" + q);
  if (!res.ok) {
    console.log(res);
    throw new Error(res?.status.toString() || "Failed to load current weather");
  }
  const data = await res.json();
  return data;
}

export async function getForecast(coords: {
  lat: number;
  lon: number;
}): Promise<ForecastData> {
  // keep your precious api calls until ready
  // return Promise.resolve(ONE_CALL);

  const res = await fetch(
    `${FORECAST_URL}&lat=${coords.lat}&lon=${coords.lon}`
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res?.status.toString() || "Failed to load forecast");
  }
  const data = await res.json();
  return data;
}
