import DailyForecast from "./DailyForecast";
import Chart from "./Chart/Chart";
import StyledSection from "./StyledSection";

const Forecast = () => {
  return (
    <StyledSection>
      <h2>Daily Forecast</h2>
      <DailyForecast />
      <Chart />
    </StyledSection>
  );
};
export default Forecast;
