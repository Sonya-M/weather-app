// wind speed
/**
 * <.5 m/S        calm
 * .5-1.5 m/s     light air
 * 1.6–3.3 m/s    light breeze
 * 3.4–5.5 m/s    gentle breeze
 * 5.5–7.9 m/s    Moderate breeze
 * 8–10.7 m/s     Fresh breeze
 * 10.8–13.8 m/s  Strong breeze
 * 13.9–17.1 m/s  High wind, moderate gale, near gale
 * 17.2–20.7 m/s  Gale
 * 20.8–24.4 m/s  Strong/severe gale
 * 24.5–28.4 m/s  Storm
 * 28.5–32.6 m/s  Violent storm
 * ≥ 32.7 m/s     Hurricane force
 *
 * @param value wind speed in m/s
 * @returns color and description for given wind speed
 */
export function wind(value: number): { color: string; desc: string } {
  if (value <= 0.5) return { color: "#dbecfa", desc: "calm" };
  if (value <= 1.5) return { color: "#90e2f5", desc: "light air" };
  if (value <= 3.3) return { color: "#90f5dd", desc: "light breeze" };
  if (value <= 5.5) return { color: "#90f5bd", desc: "gentle breeze" };
  if (value <= 7.9) return { color: "#95f590", desc: "moderate breeze" };
  if (value <= 10.7) return { color: "#93f562", desc: "fresh breeze" };
  if (value <= 13.8) return { color: "#c9f562", desc: "Strong breeze" };
  if (value <= 17.1) return { color: "#f5f562", desc: "High wind" };
  if (value <= 20.7) return { color: "#f5d362", desc: "gale" };
  if (value <= 24.4) return { color: "#f5b362", desc: "strong gale" };
  if (value <= 28.4) return { color: "#f58762", desc: "storm" };
  if (value <= 32.6) return { color: "#e02209", desc: "violent storm" };
  return { color: "#db0f49", desc: "hurricane force" };
}

/**
 * 28°C (or more) - Hot
 * 15 to 28°C - Warm
 * 10 to 15°C - Cool
 * 5 to 10°C - Chilly
 * 0 to 5°C - Cold
 * 0°C (or less) - Freezing
 * @param value temperature in Celsius
 * @returns color & description for given temperature
 */
export function temperature(value: number): { color: string; desc: string } {
  if (value <= 0) return { color: "#3471eb", desc: "freezing" };
  if (value <= 5) return { color: "#34b4eb", desc: "cold" };
  if (value <= 10) return { color: "#34ebe5", desc: "chilly" };
  if (value <= 15) return { color: "#9aeced", desc: "cool" };
  if (value <= 28) return { color: "#ebc52f", desc: "warm" };
  return { color: "#eb4e2f", desc: "hot" };
}
