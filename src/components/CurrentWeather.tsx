import * as getters from "../utils/getters";
import { CurrentData } from "../models/CurrentData";
import CurrWeatherTable from "./CurrWeatherTable";
import StyledSection from "./StyledSection";

import styled from "styled-components";

const WeatherSummaryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .temp {
    font-size: 1.6rem;
  }
`;

const CurrentWeather: React.FC<{ data: CurrentData }> = (props) => {
  const { data } = props;
  return (
    <StyledSection>
      <h3>
        Current weather in {getters.getAreaName(data)},{" "}
        {getters.getCountry(data)}
      </h3>
      <WeatherSummaryDiv>
        <img
          src={getters.getIcon2x(data)}
          alt={getters.getMainDesc(data)}
          width="100"
          height="100"
        />
        <p>
          <span className="temp">{getters.getCurrentTemp(data)}°C </span>
          <br />
          <span>{`Feels like ${getters.getFeelsLikeTemp(data)}°C`}</span>
        </p>
      </WeatherSummaryDiv>
      <CurrWeatherTable
        sunrise={getters.getSunrise(data)}
        sunset={getters.getSunset(data)}
        humidity={`${getters.getHumidity(data)}%`}
        wind={`${getters.getWindSpeed(data)} m/s`}
        minTemp={`${getters.getMinTemp(data)}°C`}
        maxTemp={`${getters.getMaxTemp(data)}°C`}
        feelsLike={`${getters.getFeelsLikeTemp(data)}°C`}
      />
    </StyledSection>
  );
};

export default CurrentWeather;
