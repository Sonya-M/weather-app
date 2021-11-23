import { useContext } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";

export default function Home() {
  const userDataCtx = useContext(UserDataContext);

  if (userDataCtx.loading) {
    return <Loader />;
  }
  const userLocation = userDataCtx.area ? userDataCtx.area : "";
  return (
    <>
      <SearchBar />
      <Weather area={userLocation} />{" "}
    </>
  );
}
