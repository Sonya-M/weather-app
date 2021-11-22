import React, { useState, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Loader from "../components/Loader";

interface Location {
  lon: number;
  lat: number;
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState(false);

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
    setLocation({
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
        setLocationError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (locationError) {
    return (
      <p>
        In order to get the current weather for your location, you need to allow
        this app location access.
      </p>
    );
  }

  return location ? (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  ) : (
    <p>
      You need to allow location access in order to get current weather
      information for your city.
    </p>
  );
}
