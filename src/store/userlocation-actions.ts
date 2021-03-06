import { AppDispatch } from "./index"; // TODO ???
import { userLocationActions } from "./userlocation-slice";
import { GeolocationData } from "../models/GeolocationData";
import { FetchStatus } from "../models/FetchStatus";

export const getUserLocationData = () => {
  return async (dispatch: AppDispatch) => {
    const getLocation = async () => {
      const getCoordinates = () => {
        return new Promise<GeolocationPosition>(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };

      const position = await getCoordinates();
      const GEOLOCATION_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(GEOLOCATION_URL);
      if (!response.ok) throw new Error("Failed to get location");
      const data = await response.json();
      if (!data?.length) throw new Error("Unexpected data");
      // console.log("geolocation response: ", data);
      // return data[0].name;
      return data[0]; // return the first item, prob. the best match
    };
    dispatch(userLocationActions.setStatus(FetchStatus.LOADING));
    try {
      const locationData: GeolocationData = await getLocation();
      dispatch(userLocationActions.setUserLocation(locationData));
      dispatch(userLocationActions.setUserBlocked(false));
      dispatch(userLocationActions.setStatus(FetchStatus.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(userLocationActions.setStatus(FetchStatus.ERROR));
      if (error instanceof GeolocationPositionError && error.code === 1) {
        dispatch(userLocationActions.setUserBlocked(true));
      } else {
        // TODO: check this, but I think there is no need to throw
        // errors on this - fails silently, only no weather data
        // for user location is shown on the home page
        dispatch(userLocationActions.setUserBlocked(false));
      }
    }
  };
};
