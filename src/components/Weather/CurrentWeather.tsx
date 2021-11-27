import * as getters from "../../utils/getters";
import CurrWeatherTable from "./CurrWeatherTable";
import StyledSection from ".././UI/StyledSection";

import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

const WeatherSummaryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .temp {
    font-size: 1.6rem;
  }
`;

const CurrentWeather: React.FC = () => {
  const currentWeather = useAppSelector(
    (state) => state.weather.currentWeather
  );
  if (!currentWeather) return null;
  return (
    <StyledSection>
      <h3>
        Current weather in {getters.getAreaName(currentWeather)},{" "}
        {getters.getCountry(currentWeather)}
      </h3>
      <WeatherSummaryDiv>
        <img
          src={getters.getIcon2x(currentWeather)}
          alt={getters.getMainDesc(currentWeather)}
          title={getters.getMainDesc(currentWeather)}
          width="100"
          height="100"
        />
        <p>
          <span className="temp">
            {getters.getCurrentTemp(currentWeather)}°C{" "}
          </span>
          <br />
          <span>{`Feels like ${getters.getFeelsLikeTemp(
            currentWeather
          )}°C`}</span>
        </p>
      </WeatherSummaryDiv>
      <CurrWeatherTable />
    </StyledSection>
  );
};

export default CurrentWeather;
