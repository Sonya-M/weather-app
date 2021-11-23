import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../service/http-service";
import { CurrentData } from "../models/CurrentData";
import { ForecastData } from "../models/ForecastData";

import Loader from "./Loader";
import StyledMessage from "./StyledMessage";
import FullWidthSection from "./FullWidthSection";

const Weather: React.FC<{
  area: string;
}> = (props) => {
  const [currWeatherData, setCurrWeatherData] = useState<CurrentData | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(null); // must reset!
    getCurrentWeather(props.area)
      .then((d) => {
        setCurrWeatherData(d);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.area]);

  useEffect(() => {
    if (!currWeatherData) return;
    setLoadingForecast(true);
    getForecast(currWeatherData.coord)
      .then((d) => setForecastData(d))
      .catch((err) => {
        console.log(err);
        // no need to keep track of this error in state - enough to know
        // there is no data
      })
      .finally(() => {
        setLoadingForecast(false);
      });
  }, [currWeatherData]);

  if (error) {
    const msg =
      error.message === "404"
        ? "Found no data for '" + props.area + "'"
        : "Error: " + error.message;
    return (
      <FullWidthSection>
        <StyledMessage color="darkred">{msg}</StyledMessage>
      </FullWidthSection>
    );
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
        <StyledMessage color="darkred">Failed to load forecast</StyledMessage>
      )}
    </>
  ) : (
    <FullWidthSection>
      <StyledMessage color="darkred">
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Try a new search.</p>
      </StyledMessage>
    </FullWidthSection>
  );
};

export default Weather;
