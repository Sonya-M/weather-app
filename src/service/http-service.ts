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
  q = formatQuery(q);
  const res = await fetch(CURRENT_WEATHER_URL + "&q=" + q);
  // const resp = await fetch(CURRENT_WEATHER_URL);

  console.log(res);
  if (!res.ok) throw new Error("Failed to load current weather");
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getForecast(coords: {
  lat: number;
  lon: number;
}): Promise<ForecastData> {
  const res = await fetch(
    `${FORECAST_URL}&lat=${coords.lat}&lon=${coords.lon}`
  );
  console.log(res);
  if (!res.ok) throw new Error("Failed to load forecast");
  const data = await res.json();
  console.log(data);
  return data;
}
