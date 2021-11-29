import styled from "styled-components";

const StyledLegend = styled.div`
  padding: 0.2rem;
  min-width: fit-content;
  border-radius: 0.4rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: fit-content;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const StyledLegendEntry = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const ColorDiv = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
`;

const DescDiv = styled.div`
  font-size: 0.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface LegendData {
  color: string;
  desc: string;
}
const ChartLegend: React.FC<{ legendData: LegendData[] }> = (props) => {
  return (
    <StyledLegend>
      {props.legendData.map((entry, i) => (
        <LegendEntry key={i} color={entry.color} desc={entry.desc} />
      ))}
    </StyledLegend>
  );
};

const LegendEntry: React.FC<{ color: string; desc: string }> = (props) => {
  return (
    <StyledLegendEntry>
      <ColorDiv color={props.color} />
      <DescDiv>{props.desc}</DescDiv>
    </StyledLegendEntry>
  );
};

export default ChartLegend;
