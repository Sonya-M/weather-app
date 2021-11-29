import DailyForecast from "./DailyForecast";
import TemperatureChart from "./TemperatureChart/TemperatureChart";
import StyledSection from "../UI/StyledSection";
import { useAppSelector } from "../../store/hooks";
import Chart from "./Chart/Chart";
import WindChartLegend from "./Legends/WindChartLegend";

import { shortFormattedDate } from "./../../utils/formatters";
import { temperature, wind } from "./../../utils/value-to-color-mappers";
import TemperatureChartLegend from "./Legends/TemperatureChartLegend";
import { KelvinToCelsius } from "../../utils/converters";
import FullWidthSection from "../UI/FullWidthSection";

const Forecast: React.FC = () => {
  const forecast = useAppSelector((state) => state.weather.forecast);
  if (!forecast) return null;

  const daily = forecast.daily;

  const windData = daily.map((entry) => ({
    value: entry.wind_speed,
    label: shortFormattedDate(entry.dt * 1000),
  }));
  const hourlyTempData = forecast.hourly.map((entry) => ({
    value: entry.temp,
    label: new Date(entry.dt * 1000).toISOString(),
  }));
  return (
    <>
      <StyledSection>
        <h2>Daily Forecast</h2>
        <DailyForecast />
        <TemperatureChart data={forecast} />
      </StyledSection>

      {/* TODO: move to the details page */}
      <FullWidthSection style={{ textAlign: "center" }}>
        <h3>Wind speed in m/s</h3>
        <Chart data={windData} mapper={wind} legend={<WindChartLegend />} />

        <br />
        <h3>Temperature in the next 48 hours</h3>
        <Chart
          slim={true}
          data={hourlyTempData}
          mapper={temperature}
          unitConverter={KelvinToCelsius}
          legend={<TemperatureChartLegend />}
        />
      </FullWidthSection>
    </>
  );
};
export default Forecast;
