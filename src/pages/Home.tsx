import SearchBar from "../components/Weather/Search";
import Weather from "../components/Weather/Weather";
import FullWidthSection from "../components/UI/FullWidthSection";

import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { getCurrentWeather } from "../store/weather-actions";
import { getForecast } from "../store/weather-actions";

export default function Home() {
  const userLocation = useAppSelector((state) => state.userLocation);
  const weather = useAppSelector((state) => state.weather);
  const searchParams = useSearchParams()[0];
  const dispatch = useAppDispatch();
  // if there is a query, show results for that, otherwise, show weather for
  // user location, if available
  let location = searchParams.get("q") || userLocation.location?.name;

  useEffect(() => {
    if (!location) return;
    dispatch(getCurrentWeather(location));
  }, [searchParams, location, dispatch]);

  useEffect(() => {
    if (!weather.area?.coords) return;
    dispatch(
      getForecast({
        lat: weather.area.coords.lat,
        lon: weather.area.coords.lon,
      })
    );
  }, [weather.area?.coords, dispatch]);

  return (
    <>
      <FullWidthSection>
        <h1>How's the weather in...</h1>
        <SearchBar />
      </FullWidthSection>
      {location && <Weather location={location} />}
    </>
  );
}

// import { useContext } from "react";
// import Loader from "../components/UI/Loader";
// import SearchBar from "../components/Weather/Search";
// import Weather from "../components/Weather/Weather";
// import { LocationDataContext } from "../store-ctx/location-data-ctx";
// import FullWidthSection from "../components/UI/FullWidthSection";

// export default function Home() {
//   const ctx = useContext(LocationDataContext);

//   if (ctx.loading) {
//     return <Loader />;
//   }
//   return (
//     <>
//       <FullWidthSection>
//         <h1>How's the weather in...</h1>
//         <SearchBar />
//       </FullWidthSection>
//       {ctx.area && <Weather area={ctx.area} />}
//     </>
//   );
// }
