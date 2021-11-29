import ChartLegend from "./ChartLegend";

const TemperatureChartLegend = () => {
  const legendData = [
    { color: "#3471eb", desc: "<= 0°C: freezing" },
    { color: "#34b4eb", desc: "0.1-5°C: cold" },
    { color: "#34ebe5", desc: "5.1-10 °C: chilly" },
    { color: "#9aeced", desc: "10.1-15°C: cool" },
    { color: "#ebc52f", desc: "15.1-28°C: warm" },
    { color: "#eb4e2f", desc: ">28°C: hot" },
  ];
  return <ChartLegend legendData={legendData} />;
};
export default TemperatureChartLegend;
