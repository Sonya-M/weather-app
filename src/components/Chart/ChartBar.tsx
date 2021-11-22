import styled from "styled-components";

const TempBar = styled.div`
  height: 100%;
  width: 2.3rem;
  max-width: calc(10vw);

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
`;

const ChartBar: React.FC<{
  forecast: {
    min: number;
    max: number;
    day: string;
  };
  weather: { icon: string; description: string };
  max: number;
}> = (props) => {
  let barFillHeight = "0%";
  let minBarFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.forecast.max / props.max) * 100) + "%";
    minBarFillHeight = Math.round((props.forecast.min / props.max) * 100) + "%";
  }
  return (
    <TempBar>
      {/* <img src={props.weather.icon} alt={props.weather.description} /> */}
      <ChartBarInner>
        <ChartBarLabel>{`${props.forecast.max}°`}</ChartBarLabel>
        <ChartBarFillMax style={{ height: barFillHeight }}>
          <ChartBarFillMin style={{ height: minBarFillHeight }} />
        </ChartBarFillMax>
        <ChartBarLabel>{`${props.forecast.min}°`}</ChartBarLabel>
      </ChartBarInner>
      <ChartBarLabel>{props.forecast.day}</ChartBarLabel>
    </TempBar>
  );
};

export default ChartBar;
