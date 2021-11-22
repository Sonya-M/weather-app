import { formatQuery } from "../utils/formatters";
import { CurrentData } from "../models/CurrentData";

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_API_KEY}`;

// leave error catching to caller
export async function getCurrentWeather(q: string): Promise<CurrentData> {
  q = formatQuery(q);
  const resp = await fetch(CURRENT_WEATHER_URL + "&q=" + q);
  // const resp = await fetch(CURRENT_WEATHER_URL);

  console.log(resp);
  if (!resp.ok) throw new Error();
  const data = await resp.json();
  console.log(data);
  return data;
}
