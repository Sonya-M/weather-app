import { ONE_CALL } from "../../placeholder-data/one_call";
import * as getters from "../../utils/getters";

import ChartBar from "./ChartBar";
import styled from "styled-components";

const TempChart = styled.div`
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  width: max-content;
  max-width: 95vw;
  overflow-x: auto;

  display: flex;
  justify-content: flex-start;
  gap: 0.2rem;

  height: 13rem;
  min-height: fit-content;

  @media screen and (min-width: 400px) {
    gap: 0.4rem;
  }
`;

const Chart = () => {
  const dailyF = getters.get7dayForecast(ONE_CALL);
  console.log("dailyF: ", dailyF);
  const forecast = dailyF.map((f) => ({ min: f.min, max: f.max, day: f.day }));
  const weeklyMax = Math.max(...dailyF.map((f) => f.max));
  const icons = getters.getDailyWeatherIcons(ONE_CALL);

  return (
    <>
      <h3>Temperature</h3>
      <TempChart>
        {forecast.map((f, i) => (
          <ChartBar
            forecast={f}
            max={weeklyMax}
            key={"" + i}
            weather={icons[i]}
          />
        ))}
      </TempChart>
    </>
  );
};

export default Chart;
