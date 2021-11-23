import { useContext, useState } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/Search";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";
import styled from "styled-components";

const SearchSection = styled.section`
  margin: auto;
  & h1 {
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    grid-column: span 2;
  }
`;

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
      <SearchSection>
        <h1>How's the weather in...</h1>
        <SearchBar onSearch={handleSearch} />
      </SearchSection>
      {location && <Weather area={location} />}
    </>
  );
}
