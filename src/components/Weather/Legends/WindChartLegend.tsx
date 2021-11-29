import ChartLegend from "./ChartLegend";

const WindChartLegend = () => {
  const legendData = [
    { color: "#dbecfa", desc: "< 0.5m/s: calm" },
    { color: "#90e2f5", desc: "0.5–1.5 m/s: light air" },
    { color: "#90f5dd", desc: "1.6–3.3 m/s: light breeze" },
    { color: "#90f5bd", desc: "3.4–5.5 m/s: gentle breeze" },
    { color: "#95f590", desc: "5.5–7.9 m/s: moderate breeze" },
    { color: "#93f562", desc: "8–10.7 m/s: fresh breeze" },
    { color: "#c9f562", desc: "10.8–13.8 m/s: strong breeze" },
    { color: "#f5f562", desc: "13.9–17.1 m/s: high wind" },
    { color: "#f5d362", desc: "17.2–20.7 m/s: gale" },
    { color: "#f5b362", desc: "20.8–24.4 m/s: strong gale" },
    { color: "#f58762", desc: "24.5–28.4 m/s: storm" },
    { color: "#e02209", desc: "28.5–32.6 m/s: violent storm" },
    { color: "#db0f49", desc: "≥ 32.7 m/s: hurricane force" },
  ];
  return <ChartLegend legendData={legendData} />;
};
export default WindChartLegend;
