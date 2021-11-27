import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import Loader from "../UI/Loader";
import ErrorMessage from "../UI/ErrorMessage";
import FullWidthSection from "../UI/FullWidthSection";

import { useAppSelector } from "../../store/hooks";
import { FetchStatus } from "../../models/FetchStatus";

const Weather: React.FC<{ location: string }> = (props) => {
  const { currentWeather, currWeatherStatus, forecast, forecastStatus, error } =
    useAppSelector((state) => state.weather);

  if (currWeatherStatus === FetchStatus.ERROR) {
    const msg =
      error === "404"
        ? "No data for '" + props.location + "'"
        : "Error: " + error;
    return (
      <FullWidthSection>
        <ErrorMessage>{msg}</ErrorMessage>
      </FullWidthSection>
    );
  }
  if (
    currWeatherStatus === FetchStatus.LOADING ||
    forecastStatus === FetchStatus.LOADING
  ) {
    return <Loader />;
  }

  return currentWeather ? (
    <>
      <CurrentWeather />
      {forecast ? (
        <Forecast />
      ) : (
        <ErrorMessage>Failed to load forecast</ErrorMessage>
      )}
    </>
  ) : (
    <FullWidthSection>
      <ErrorMessage>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>Try a new search.</p>
      </ErrorMessage>
    </FullWidthSection>
  );
};

export default Weather;
