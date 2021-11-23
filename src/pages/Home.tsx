import { useContext, useState } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";

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
      <SearchBar onSearch={handleSearch}/>
      {location && <Weather area={location} />}
    </>
  );
}
