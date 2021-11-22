import { ONE_CALL } from "../placeholder-data/one_call";
import * as getters from "../utils/getters";
import { ForecastData } from "../models/ForecastData";

import styled from "styled-components";

const ForecastUl = styled.ul`
  margin: auto;
  display: flex;
  padding: 1rem;
  width: max-content;
  max-width: 95vw;
  overflow-x: auto;

  list-style-type: none;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.7rem;
    max-width: calc(95vw / 8.7);
  }
  & li img {
    /* max-width: 10vw; */
  }
`;

const DailyForecast: React.FC<{ data: ForecastData }> = (props) => {
  const forecast = props.data;
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
