export function getIcon(data: { weather: { icon: string }[] }) {
  return "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

export function getIcon2x(data: { weather: { icon: string }[] }) {
  return "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
}

export function getCoords(data: { coord: { lon: number; lat: number } }) {
  return { lon: data.coord.lon, lat: data.coord.lat };
}

export function getDesc(data: { weather: { description: string }[] }) {
  return data.weather[0].description;
}

export function getCurrentTemp(data: { main: { temp: number } }) {
  return data.main.temp;
}

export function getFeelsLikeTemp(data: { main: { feels_like: number } }) {
  return data.main.feels_like;
}

export function getMinTemp(data: { main: { temp_min: number } }) {
  return data.main.temp_min;
}

export function getMaxTemp(data: { main: { temp_max: number } }) {
  return data.main.temp_max;
}

/** @returns wind speed in m/s  */
export function getWindSpeed(data: { wind: { speed: number } }) {
  return data.wind.speed;
}

/** @returns wind gust in m/s  */
export function getWindGust(data: { wind: { gust: number } }) {
  return data.wind.gust;
}

export function getCityName(data: { name: string }) {
  return data.name;
}

export function getCountry(data: { sys: { country: string } }) {
  return data.sys.country;
}
