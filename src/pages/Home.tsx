import { useContext } from "react";
import Loader from "../components/UI/Loader";
import SearchBar from "../components/Weather/Search";
import Weather from "../components/Weather/Weather";
import { LocationDataContext } from "../store-ctx/location-data-ctx";
import FullWidthSection from "../components/UI/FullWidthSection";

export default function Home() {
  const ctx = useContext(LocationDataContext);

  if (ctx.loading) {
    return <Loader />;
  }
  return (
    <>
      <FullWidthSection>
        <h1>How's the weather in...</h1>
        <SearchBar />
      </FullWidthSection>
      {ctx.area && <Weather area={ctx.area} />}
    </>
  );
}
