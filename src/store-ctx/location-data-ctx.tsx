import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type LocationDataCtxObj = {
  area: string | null;
  loading: boolean;
};

export const LocationDataContext = React.createContext<LocationDataCtxObj>({
  area: "",
  loading: false,
});

let initial = true;

const LocationDataContextProvider: React.FC = (props) => {
  const [loading, setLoading] = useState(false);
  const [userArea, setUserArea] = useState("");

  const searchParams = useSearchParams()[0];

  const getLocation = async () => {
    const getCoordinates = () => {
      return new Promise<GeolocationPosition>(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };
    const position = await getCoordinates();
    const GEOLOCATION_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(GEOLOCATION_URL);
    if (!response.ok) throw new Error("Failed to get area");
    const data = await response.json();
    if (!data?.length) throw new Error("Unexpected data");
    // console.log(data[0].name);
    setUserArea(data[0].name);
  };

  useEffect(() => {
    setLoading(true);
    getLocation()
      .catch((error) => {
        console.log(error);
        // silently catch the error, location data will not be set
      })
      .finally(() => {
        setLoading(false);
        initial = false;
      });
  }, []);

  // It appears  the initial check basically prevents searchParams being called
  // when the app first loads, so now no longer getting the warning about state
  // update on an unmounted component
  const location =
    initial && userArea
      ? userArea
      : initial
      ? null
      : !searchParams.get("q") && userArea
      ? userArea
      : searchParams.get("q");

  return (
    <LocationDataContext.Provider value={{ area: location, loading: loading }}>
      {props.children}
    </LocationDataContext.Provider>
  );
};

export default LocationDataContextProvider;
