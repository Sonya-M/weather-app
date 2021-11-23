import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../service/http-service";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";

import Loader from "./Loader";

const Weather: React.FC<{
  area: string;
}> = (props) => {
  const [currWeatherData, setCurrWeatherData] = useState<CurrentData | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [forecastError, setForecastError] = useState<Error | null>(null);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(false);

  useEffect(() => {
    if (!props.area) return;
    // let isMounted = true; // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    // seems kind of hacky to me though...
    setLoading(true);
    getCurrentWeather(props.area)
      .then((d) => {
        /* if (isMounted)  */ setCurrWeatherData(d);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // return () => {
    //   isMounted = false;
    // };
  }, [props.area]);

  useEffect(() => {
    if (!currWeatherData) return;
    setLoadingForecast(true);
    getForecast(currWeatherData.coord)
      .then((d) => setForecastData(d))
      .catch((err) => {
        console.log(err);
        setForecastError(err);
      })
      .finally(() => {
        setLoadingForecast(false);
      });
  }, [currWeatherData]);

  if (error) {
    return <p>ERROR</p>;
  }
  if (loading || loadingForecast) {
    return <Loader />;
  }

  return currWeatherData ? (
    <>
      <CurrentWeather data={currWeatherData} />
      {forecastData ? (
        <Forecast data={forecastData} />
      ) : (
        // TODO:
        <p>Failed to load forecast</p>
      )}
    </>
  ) : (
    <p>NO DATA</p>
  );
};

export default Weather;
