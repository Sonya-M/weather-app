import { KelvinToCelsius } from "../../../utils/converters";
import styled from "styled-components";

const TempBar = styled.div`
  height: 100%;
  width: 2.3rem;
  max-width: 10vw;

  & img {
    max-width: 100%;
  }

  @media screen and(min-width: 400px) {
    width: 3rem;
  }
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFillMax = styled.div`
  background-color: #eff301;
  width: 100%;
  position: relative;
  bottom: 0;
`;

const ChartBarFillMin = styled.div`
  background-color: #008cff;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const ChartBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;
  z-index: 2;
`;

const ChartBar: React.FC<{
  forecast: {
    min: number;
    max: number;
    day: string;
  };
  range: number;
  weeklyMin: number;
  weeklyMax: number;
  chartHeight: number;
}> = (props) => {
  let maxBarFillHeight = "100%";
  let minBarFillHeight = "100%";

  if (props.range > 0) {
    // leave some space for the labels, like 10%:
    const oneDegreeHeight = Math.round(
      (0.9 * props.chartHeight) / (props.range + 1)
    );
    maxBarFillHeight =
      (props.forecast.max - props.weeklyMin + 1) * oneDegreeHeight + "px";
    minBarFillHeight =
      (props.forecast.min - props.weeklyMin + 1) * oneDegreeHeight + "px";
    // console.log(`1 deg height: ${oneDegreeHeight};
    // maxBarFillHeight: ${maxBarFillHeight};
    // minBarFillHeight: ${minBarFillHeight}`);
  }
  return (
    <TempBar>
      <ChartBarInner>
        <ChartBarLabel>{`${KelvinToCelsius(
          props.forecast.max
        )}°`}</ChartBarLabel>

        <ChartBarFillMax style={{ height: maxBarFillHeight }}>
          <ChartBarFillMin style={{ height: minBarFillHeight }} />
        </ChartBarFillMax>

        <ChartBarLabel>{`${KelvinToCelsius(
          props.forecast.min
        )}°`}</ChartBarLabel>
      </ChartBarInner>
      <ChartBarLabel>{props.forecast.day}</ChartBarLabel>
    </TempBar>
  );
};

export default ChartBar;
