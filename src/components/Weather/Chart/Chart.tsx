import * as getters from "../../../utils/getters";
import { ForecastData } from "../../../models/ForecastData";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const CHART_HEIGHT = 300; // 300 px, set it once
const PADDING = 16;

const TempChart = styled.div`
  margin: auto;
  padding: ${PADDING}px;
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

  height: ${CHART_HEIGHT + PADDING * 2}px; /* fixed width for easy calc */

  min-height: fit-content;

  @media screen and (min-width: 400px) {
    gap: 0.4rem;
  }
`;

const Chart: React.FC<{ data: ForecastData }> = (props) => {
  const dailyF = getters.getDailyForecast(props.data);
  const forecast = dailyF.map((f) => ({ min: f.min, max: f.max, day: f.day }));
  const weeklyMax = Math.max(...dailyF.map((f) => f.max));
  const weeklyMin = Math.min(...dailyF.map((f) => f.min));
  // note that data is in Kelvins for easier calculations :)
  const tempRange = weeklyMax - weeklyMin;

  return (
    <>
      <h3>Temperature</h3>
      <TempChart>
        {forecast.map((f, i) => (
          <ChartBar
            tempForecast={f}
            key={"" + i}
            weeklyMax={weeklyMax}
            weeklyMin={weeklyMin}
            range={tempRange}
            chartHeight={CHART_HEIGHT}
          />
        ))}
      </TempChart>
    </>
  );
};

export default Chart;

// TODO: make the chart more general (reusable) - that's why keep props, just
// make the more general
