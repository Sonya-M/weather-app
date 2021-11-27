import DailyForecast from "./DailyForecast";
import Chart from "./Chart/Chart";
import StyledSection from "../UI/StyledSection";
import { useAppSelector } from "../../store/hooks";

const Forecast: React.FC = () => {
  const forecast = useAppSelector((state) => state.weather.forecast);
  if (!forecast) return null;
  return (
    <StyledSection>
      <h2>Daily Forecast</h2>
      <DailyForecast />
      <Chart data={forecast} />
    </StyledSection>
  );
};
export default Forecast;
