import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// redux store
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { getUserLocationData } from "./store/userlocation-actions";

// TODO: delete afterwards:
import { userLocationActions } from "./store/userlocation-slice";
import { DUMMY_GEOCODING_RESP_2 } from "./placeholder-data/reverse-geocoding";

function App() {
  const dispatch = useAppDispatch();

  // TODO: uncomment afterwards
  // useEffect(() => {
  //   dispatch(getUserLocationData());
  // }, [dispatch]);

  // TODO: delete afterwards
  useEffect(() => {
    dispatch(userLocationActions.setUserLocation(DUMMY_GEOCODING_RESP_2[0]));
    dispatch(userLocationActions.setUserBlocked(false));
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
