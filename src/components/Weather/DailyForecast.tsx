import * as getters from "../../utils/getters";

import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

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
`;

const DailyForecast: React.FC = () => {
  const forecast = useAppSelector((state) => state.weather.forecast);

  if (!forecast) return null;

  const dailyF = getters.getDailyForecast(forecast);
  const icons = getters.getDailyWeatherIcons(forecast);
  return (
    <section>
      <h3>Weather Conditions</h3>
      <ForecastUl>
        {dailyF.map((f, i) => (
          <li key={f.day}>
            <img
              src={icons[i].icon}
              alt={icons[i].description}
              title={icons[i].description}
            />
            <span>{f.day}</span>
          </li>
        ))}
      </ForecastUl>
    </section>
  );
};

export default DailyForecast;
