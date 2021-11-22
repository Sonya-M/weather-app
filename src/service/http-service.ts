import { formatQuery } from "../utils/formatters";

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}`;

export async function getCurrentWeather(q: string) {
  q = formatQuery(q);
  try {
    const resp = await fetch(CURRENT_WEATHER_URL + "&q=" + q);
    // const resp = await fetch(CURRENT_WEATHER_URL);

    console.log(resp);
    if (!resp.ok) throw new Error();
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
