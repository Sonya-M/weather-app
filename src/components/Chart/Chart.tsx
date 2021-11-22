import { ONE_CALL } from "../../placeholder-data/one_call";
import * as getters from "../../utils/getters";
import { ForecastData } from "../../models/ForecastData";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const TempChart = styled.div`
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8dfff;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: max-content;
  max-width: 95vw;
  overflow-x: auto;

  display: flex;
  justify-content: flex-start;
  gap: 0.2rem;

  height: 300px; /* fixed width for easy calc */
  min-height: fit-content;

  @media screen and (min-width: 400px) {
    gap: 0.4rem;
  }
`;

const Chart: React.FC<{ data: ForecastData }> = (props) => {
  const dailyF = getters.get7dayForecast(props.data);
  console.log("dailyF: ", dailyF);
  const forecast = dailyF.map((f) => ({ min: f.min, max: f.max, day: f.day }));
  const weeklyMax = Math.max(...dailyF.map((f) => f.max));
  const weeklyMin = Math.min(...dailyF.map((f) => f.min));
  // note that data is in Kelvins for easier calculations :)
  const tempRange = weeklyMax - weeklyMin;
  const icons = getters.getDailyWeatherIcons(ONE_CALL);

  return (
    <>
      <h3>Temperature</h3>
      <TempChart>
        {forecast.map((f, i) => (
          <ChartBar
            forecast={f}
            key={"" + i}
            weather={icons[i]}
            weeklyMax={weeklyMax}
            weeklyMin={weeklyMin}
            range={tempRange}
            chartHeight={300}
          />
        ))}
      </TempChart>
    </>
  );
};

export default Chart;
