import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { LocationData } from "../models/Location";

const Weather: React.FC<{ userLocation?: LocationData }> = (props) => {
  return (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  );
};

export default Weather;
