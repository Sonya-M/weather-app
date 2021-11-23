import { useContext } from "react";
import Loader from "../components/Loader";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";

export default function Home() {
  const userDataCtx = useContext(UserDataContext);

  if (userDataCtx.loading) {
    return <Loader />;
  }

  const userLocation = userDataCtx.area
    ? {
        // if area is set, must have the coords
        lat: userDataCtx.coords!.lat,
        lon: userDataCtx.coords!.lon,
        area: userDataCtx.area,
      }
    : null;

  return <Weather userLocation={userLocation} />;
}
