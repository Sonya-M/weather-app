import React, { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState<{ lon: number; lat: number }>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
        setLocation({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  console.log(location);
  return location ? (
    <>
      <h1>Welcome</h1>
      <p>{`Your location is ${location.lat}, ${location.lon}`}</p>
    </>
  ) : (
    <p>
      You need to allow location access in order to get current weather
      information for your city.
    </p>
  );
}
