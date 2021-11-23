import React, { useState, useEffect } from "react";

type UserDataCtxObj = {
  area: string;
  loading: boolean;
};

export const UserDataContext = React.createContext<UserDataCtxObj>({
  area: "",
  loading: false,
});

const UserDataContextProvider: React.FC = (props) => {
  const [loading, setLoading] = useState(false);
  const [userArea, setUserArea] = useState("");

  const getLocation = async () => {
    const getCoordinates = () => {
      return new Promise<GeolocationPosition>(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };
    const position = await getCoordinates();
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to get area");
    const data = await response.json();
    if (!data?.length) throw new Error("Unexpected data");
    console.log(data[0].name);
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
      });
  }, []);

  return (
    <UserDataContext.Provider value={{ area: userArea, loading: loading }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
