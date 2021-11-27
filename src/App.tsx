import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// redux store
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { getUserLocationData } from "./store/userlocation-actions";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserLocationData());
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
