import { useContext } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/Search";
import Weather from "../components/Weather";
import { UserDataContext } from "../store-ctx/user-data-ctx";
import FullWidthSection from "../components/FullWidthSection";

export default function Home() {
  const userDataCtx = useContext(UserDataContext);

  if (userDataCtx.loading) {
    return <Loader />;
  }
  return (
    <>
      <FullWidthSection>
        <h1>How's the weather in...</h1>
        <SearchBar />
      </FullWidthSection>
      {userDataCtx.area && <Weather area={userDataCtx.area} />}
    </>
  );
}
