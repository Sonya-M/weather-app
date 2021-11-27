import { WiSunrise, WiSunset, WiHumidity, WiStrongWind } from "react-icons/wi";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import * as getters from "../../utils/getters";

const StyledTable = styled.table`
  margin: auto;
  padding: 1rem;
  max-width: 100%;
  & th {
    width: 3rem;
    font-size: 2rem;
    line-height: 2rem;
    justify-content: center;
  }
  & td {
    width: 10rem;
    padding-left: 1rem;
  }
  /* different icon sizes from different packages */
  & .fa {
    font-size: 1.2rem;
  }
`;

const CurrWeatherTable: React.FC = () => {
  const currentWeather = useAppSelector(
    (state) => state.weather.currentWeather
  );
  if (!currentWeather) return null;
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>
            <FaTemperatureLow className="fa" />
          </th>
          <td>{`${getters.getMinTemp(currentWeather)}°C`}</td>
        </tr>
        <tr>
          <th>
            <FaTemperatureHigh className="fa" />
          </th>
          <td>{`${getters.getMaxTemp(currentWeather)}°C`}</td>
        </tr>
        <tr>
          <th>
            <WiStrongWind />
          </th>
          <td>{`${getters.getWindSpeed(currentWeather)} m/s`}</td>
        </tr>
        <tr>
          <th>
            <WiHumidity />
          </th>
          <td>{`${getters.getHumidity(currentWeather)}%`}</td>
        </tr>
        <tr>
          <th>
            <WiSunrise />
          </th>
          <td>{getters.getSunrise(currentWeather)}</td>
        </tr>
        <tr>
          <th>
            <WiSunset />
          </th>
          <td>{getters.getSunset(currentWeather)}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default CurrWeatherTable;
