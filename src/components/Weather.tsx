import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { LocationData } from "../models/Location";
import { useEffect } from "react";
import { getCurrentWeather } from "../service/http-service";

const Weather: React.FC<{ userLocation?: LocationData }> = (props) => {
  useEffect(() => {
    getCurrentWeather("novi");
  }, []);
  return (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  );
};

export default Weather;
