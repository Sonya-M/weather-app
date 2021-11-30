import styled from "styled-components";

interface StyledChartBarProps {
  slim?: boolean;
}
const StyledChartBar = styled.div<StyledChartBarProps>`
  height: 100%;
  width: ${(props) => (props?.slim ? "1rem" : "2.3rem")};
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFill = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1rem;
  & div {
    transform: rotate(270deg);
    font-size: 0.6rem;
  } */
`;

const ChartBarLabel = styled.div<StyledChartBarProps>`
  /* font-weight: bold; */
  font-weight: ${(props) => (props.slim ? "normal" : "bold")};
  font-size: ${(props) => (props.slim ? "0.5rem" : "0.7rem")};
  text-align: center;
`;

const ChartBar: React.FC<{
  value: number;
  overallMin: number;
  range: number;
  color: string;
  chartHeight: number;
  slim?: boolean;
  label?: string;
  unitConverter?: (val: number) => number;
}> = (props) => {
  //
  let barFillHeight = "1%";

  if (props.range > 0) {
    // 0.9: leave some space for the labels;
    // range+1 so that the height of the minimum value will be equal to heightUnit;
    // can round here because dealing w/ pixels
    const heightUnit = Math.round(
      (0.9 * props.chartHeight) / (props.range + 1)
    );
    barFillHeight = (props.value - props.overallMin + 1) * heightUnit + "px";
  }

  const value = props?.unitConverter
    ? props.unitConverter(props.value)
    : props.value;

  return (
    <StyledChartBar slim={props.slim}>
      <ChartBarInner>
        <ChartBarLabel slim={props.slim}>{value.toFixed(2)}</ChartBarLabel>
        <ChartBarFill
          title={props.label}
          style={{ height: barFillHeight, backgroundColor: props.color }}
        >
          {/* <div>{value.toFixed(2)}</div> */}
        </ChartBarFill>
      </ChartBarInner>
      {!props.slim && <ChartBarLabel>{props.label}</ChartBarLabel>}
    </StyledChartBar>
  );
};

export default ChartBar;
