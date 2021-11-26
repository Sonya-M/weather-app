import DailyForecast from "./DailyForecast";
import Chart from "./Chart/Chart";
import StyledSection from "../UI/StyledSection";
import { ForecastData } from "../../models/ForecastData";

const Forecast: React.FC<{ data: ForecastData }> = (props) => {
  return (
    <StyledSection>
      <h2>Daily Forecast</h2>
      <DailyForecast data={props.data} />
      <Chart data={props.data} />
    </StyledSection>
  );
};
export default Forecast;
