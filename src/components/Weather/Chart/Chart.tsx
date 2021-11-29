import ChartBar from "./ChartBar";
import styled from "styled-components";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";

/**
 * one-value chart - as opposed to min-max val chart
 * data needed:
 * - array of {value - label} pairs
 * (will add another label for each value in the chart bar)
 *
 * calculate:
 * - overall min & max
 * - range
 */

const CHART_HEIGHT = 300; //300px
const PADDING = 16;
const SHOW_LEGEND_TOGGLE_HEIGHT = 20;

const StyledChart = styled.div`
  position: relative;
  margin: auto;
  padding: ${PADDING}px;
  border-radius: 8px;
  background-color: aliceblue;
  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: max-content;
  max-width: 95vw;
  overflow-x: auto;

  display: flex;
  justify-content: flex-start;
  height: ${CHART_HEIGHT + SHOW_LEGEND_TOGGLE_HEIGHT + PADDING * 2}px;
  min-height: fit-content;
`;

const LegendContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 3rem;
`;

const ToggleBtnDiv = styled.div`
  /* border: 1px solid black; */
  position: absolute;
  top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

interface Data {
  value: number;
  label: string;
}

const Chart: React.FC<{
  slim?: boolean;
  unitConverter?: (value: number) => number;
  data: Data[];
  mapper: (value: number) => { color: string; desc: string };
  legend?: JSX.Element;
}> = (props) => {
  const [showLegend, setShowLegend] = useState(false);

  const handleToggleShowLegend = () => {
    console.log("toggle show legend", showLegend.toString());
    setShowLegend((prevShow) => !prevShow);
  };

  const values = props.data.map((entry) => entry.value);
  const overallMax = Math.max(...values);
  const overallMin = Math.min(...values);
  const range = overallMax - overallMin;

  return (
    <StyledChart style={{ gap: props?.slim ? "0.1rem" : "0.2rem" }}>
      {props.legend && showLegend ? (
        <ToggleBtnDiv onClick={handleToggleShowLegend}>
          <BsToggleOn size="1.5rem" /> <span>&nbsp;&nbsp;Hide legend</span>
        </ToggleBtnDiv>
      ) : (
        <ToggleBtnDiv onClick={handleToggleShowLegend}>
          <BsToggleOff size="1.5rem" /> <span>&nbsp;&nbsp;Show legend</span>
        </ToggleBtnDiv>
      )}
      {props.legend && (
        <LegendContainer>
          <div>{showLegend && props.legend}</div>
        </LegendContainer>
      )}
      {props.data.map((entry, i) => (
        <ChartBar
          key={i}
          slim={props?.slim}
          value={entry.value}
          label={entry.label}
          overallMin={overallMin}
          range={range}
          chartHeight={CHART_HEIGHT}
          color={
            props.mapper(
              props?.unitConverter
                ? props.unitConverter(entry.value)
                : entry.value
            ).color
          }
          unitConverter={props?.unitConverter}
        />
      ))}
    </StyledChart>
  );
};

export default Chart;
