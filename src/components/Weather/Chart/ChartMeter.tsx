// assuming values are whole numbers

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 1.5rem;
`;

const Inner = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0;
`;

const ChartMeter: React.FC<{
  range: number;
  min: number;
  max: number;
  chartHeight: number;
  unitConverter?: (val: number) => number;
}> = (props) => {
  const roundMin = Math.round(props.min);
  const roundMax = Math.round(props.max);
  const roundRange = Math.round(roundMax - roundMin);
  const heightUnit = (0.9 * props.chartHeight) / (roundRange + 1);

  const valueLabelDivs: JSX.Element[] = [];
  for (let i = 1; i <= roundRange + 1; i++) {
    let label = roundMin + 1 * (i - 1);
    if (props.unitConverter) label = Math.round(props.unitConverter(label));
    valueLabelDivs.push(
      <Inner style={{ height: i * heightUnit }}>{label}</Inner>
    );
  }

  return <Wrapper>{valueLabelDivs}</Wrapper>;
};
export default ChartMeter;
