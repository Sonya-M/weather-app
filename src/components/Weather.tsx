import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { LocationData } from "../models/Location";
import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../service/http-service";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";

import Loader from "./Loader";

const Weather: React.FC<{ userLocation?: LocationData }> = (props) => {
  const [data, setData] = useState<CurrentData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [forecastError, setForecastError] = useState<Error | null>(null);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getCurrentWeather("munich")
      .then((d) => setData(d))
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
    setLoadingForecast(true);
    getForecast(data.coord)
      .then((d) => setForecastData(d))
      .catch((err) => {
        console.log(err);
        setForecastError(err);
      })
      .finally(() => {
        setLoadingForecast(false);
      });
  }, [data]);

  if (error) {
    return <p>ERROR</p>;
  }
  if (loading || loadingForecast) {
    return <Loader />;
  }

  return data ? (
    <>
      <CurrentWeather data={data} />
      {forecastData ? (
        <Forecast data={forecastData} />
      ) : (
        // TODO:
        <p>Failed to load forecast</p>
      )}
    </>
  ) : (
    <p>Unexpected error.</p>
  );
};

export default Weather;
