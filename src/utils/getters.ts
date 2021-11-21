import { getHrsAndMinsFromDate } from "./formatters";

// 50x50
export function getIcon(data: { weather: { icon: string }[] }) {
  return "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

// 100x100
export function getIcon2x(data: { weather: { icon: string }[] }) {
  return "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
}

export function getCoords(data: { coord: { lon: number; lat: number } }) {
  return { lon: data.coord.lon, lat: data.coord.lat };
}

export function getMainDesc(data: { weather: { main: string }[] }) {
  return data.weather[0].main;
}

export function getDesc(data: { weather: { description: string }[] }) {
  return data.weather[0].description;
}

export function getCurrentTemp(data: { main: { temp: number } }) {
  return Math.round(data.main.temp);
}

export function getFeelsLikeTemp(data: { main: { feels_like: number } }) {
  return Math.round(data.main.feels_like);
}

export function getMinTemp(data: { main: { temp_min: number } }) {
  return Math.round(data.main.temp_min);
}

export function getMaxTemp(data: { main: { temp_max: number } }) {
  return Math.round(data.main.temp_max);
}

/** @returns wind speed in m/s  */
export function getWindSpeed(data: { wind: { speed: number } }) {
  return data.wind.speed;
}

/** @returns wind gust in m/s  */
export function getWindGust(data: { wind: { gust: number } }) {
  return data.wind.gust;
}

export function getHumidity(data: { main: { humidity: number } }) {
  return data.main.humidity;
}

export function getCityName(data: { name: string }) {
  return data.name;
}

export function getCountry(data: { sys: { country: string } }) {
  return data.sys.country;
}

export function getSunrise(data: { sys: { sunrise: number } }) {
  return getHrsAndMinsFromDate(data.sys.sunrise * 1000); // timestamp in seconds, not millisecs!
}
export function getSunset(data: { sys: { sunset: number } }) {
  return getHrsAndMinsFromDate(data.sys.sunset * 1000); // timestamp in seconds, not millisecs!
}
