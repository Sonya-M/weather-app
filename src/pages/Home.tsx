import { useContext } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/Search";
import Weather from "../components/Weather";
import { LocationDataContext } from "../store-ctx/location-data-ctx";
import FullWidthSection from "../components/FullWidthSection";

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
