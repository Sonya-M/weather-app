type Coord = {
  lon: number;
  lat: number;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};
type Wind = {
  speed: number;
  deg: number;
  gust: number;
};
type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type Clouds = {
  all: number;
};
type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type CurrentData = {
  coord: Coord;
  weather: Array<WeatherData>;
  base: string;
  clouds: Clouds;
  main: Main;
  visibility: number;
  wind: Wind;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
