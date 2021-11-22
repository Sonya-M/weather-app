import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Weather from "../components/Weather";

interface Location {
  lat: number;
  lon: number;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [userLocationError, setUserLocationError] = useState(false);

  const [area, setArea] = useState("");

  const getLocation = async () => {
    const getCoordinates = () => {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      return new Promise<GeolocationPosition>(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    const position = await getCoordinates();
    ///////////////////////////////////////////////////////////////////////////
    setUserLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to get area");
    const data = await response.json();
    if (!data?.length) throw new Error("Unexpected data");
    console.log(data[0].name);
    setArea(data[0].name); ////////////////////////////////////////////////////
  };

  useEffect(() => {
    setLoading(true);
    getLocation()
      .catch((error) => {
        console.log(error);
        setUserLocationError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return userLocation ? (
    <Weather
      userLocation={{
        lat: userLocation.lat,
        lon: userLocation.lon,
        area: area,
      }}
    />
  ) : (
    <Weather />
  );
}
