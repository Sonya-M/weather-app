import React, { useState, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lon: number; lat: number }>();

  const [city, setCity] = useState("");

  useEffect(() => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
        setLocation({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });

        // fetch(
        //   `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
        // )
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data?.length) {
        //       setCity(data[0].name);
        //       console.log(data[0].name);
        //     }
        //   })
        //   .catch((err) => console.log(err));
      });
    } else {
      console.log("Not Available");
    }
    setLoading(false);
  }, []);

  console.log(location);

  if (loading) {
    return <Loader />;
  }

  return location ? (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  ) : (
    // <p>
    //   You need to allow location access in order to get current weather
    //   information for your city.
    // </p>
    <Loader />
  );
}
