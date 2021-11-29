import styled from "styled-components";

const StyledChartBar = styled.div`
  height: 100%;
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

const ChartBarLabel = styled.div`
  /* font-weight: bold; */
  font-size: 0.5rem;
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
    <StyledChartBar style={{ width: props?.slim ? "1rem" : "2.3rem" }}>
      <ChartBarInner>
        <ChartBarLabel>{value.toFixed(2)}</ChartBarLabel>
        <ChartBarFill
          title={value.toFixed(2)}
          style={{ height: barFillHeight, backgroundColor: props.color }}
        >
          {/* <div>{value.toFixed(2)}</div> */}
        </ChartBarFill>
      </ChartBarInner>
      {!props?.slim && <ChartBarLabel>{props.label}</ChartBarLabel>}
    </StyledChartBar>
  );
};

export default ChartBar;
