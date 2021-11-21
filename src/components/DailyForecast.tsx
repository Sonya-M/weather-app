import { ONE_CALL } from "../placeholder-data/one_call";
import * as getters from "../utils/getters";

import styled from "styled-components";

const ForecastUl = styled.ul`
  display: flex;
  padding: 0;
  max-width: 100vw;
  overflow-x: auto;

  list-style-type: none;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    max-width: 10vw;
  }
  & li img {
    /* max-width: 10vw; */
  }
`;

const DailyForecast = () => {
  const forecast = ONE_CALL;
  console.log(getters.get7dayForecast(forecast));
  console.log("icons: ", getters.getDailyWeatherIcons2x(forecast));
  console.log("icons: ", getters.getDailyWeatherIcons(forecast));

  const dailyF = getters.get7dayForecast(forecast);
  const icons = getters.getDailyWeatherIcons(forecast);
  console.log("dailyF: ", dailyF);

  return (
    <section>
      <h3>Weather Conditions</h3>
      <ForecastUl>
        {dailyF.map((f, i) => (
          <li key={f.day}>
            <img src={icons[i].icon} alt={icons[i].description} />
            <span>{f.day}</span>
          </li>
        ))}
      </ForecastUl>
    </section>
  );
};

export default DailyForecast;
