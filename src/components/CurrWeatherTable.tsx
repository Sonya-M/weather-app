import { WiSunrise, WiSunset, WiHumidity, WiStrongWind } from "react-icons/wi";
import styled from "styled-components";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";

const StyledTable = styled.table`
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

const CurrWeatherTable: React.FC<{
  minTemp: string;
  maxTemp: string;
  feelsLike: string;
  sunrise: string;
  sunset: string;
  humidity: string;
  wind: string;
}> = (props) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>
            <FaTemperatureLow className="fa" />
          </th>
          <td>{props.minTemp}</td>
        </tr>
        <tr>
          <th>
            <FaTemperatureHigh className="fa" />
          </th>
          <td>{props.maxTemp}</td>
        </tr>
        <tr>
          <th>
            <WiStrongWind />
          </th>
          <td>{props.wind}</td>
        </tr>
        <tr>
          <th>
            <WiHumidity />
          </th>
          <td>{props.humidity}</td>
        </tr>
        <tr>
          <th>
            <WiSunset />
          </th>
          <td>{props.sunset}</td>
        </tr>
        <tr>
          <th>
            <WiSunrise />
          </th>
          <td>{props.sunrise}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default CurrWeatherTable;
