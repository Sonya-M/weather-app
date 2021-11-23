import { useState } from "react";
import { useContext } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/Search";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";
import FullWidthSection from "../components/FullWidthSection";

let initialLoad = true;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const userDataCtx = useContext(UserDataContext);

  const handleSearch = (query: string) => {
    initialLoad = false;
    setSearchQuery(query);
  };

  if (userDataCtx.loading) {
    return <Loader />;
  }

  const location =
    initialLoad && userDataCtx.area ? userDataCtx.area : searchQuery;
  return (
    <>
      <FullWidthSection>
        <h1>How's the weather in...</h1>
        <SearchBar onSearch={handleSearch} />
      </FullWidthSection>
      {location && <Weather area={location} />}
    </>
  );
}
