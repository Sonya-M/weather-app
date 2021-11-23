import { useContext } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/Search";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";
import { useSearchParams } from "react-router-dom";
import FullWidthSection from "../components/FullWidthSection";

export default function Home() {
  const userDataCtx = useContext(UserDataContext);

  const searchParams = useSearchParams()[0];

  if (userDataCtx.loading) {
    return <Loader />;
  }

  const location =
    !searchParams.get("q") && userDataCtx.area
      ? userDataCtx.area
      : searchParams.get("q");
  return (
    <>
      <FullWidthSection>
        <h1>How's the weather in...</h1>
        <SearchBar />
      </FullWidthSection>
      {location && <Weather area={location} />}
    </>
  );
}
