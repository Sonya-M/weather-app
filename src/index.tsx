import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LocationDataContextProvider from "./store-ctx/location-data-ctx";

ReactDOM.render(
  <BrowserRouter>
    <LocationDataContextProvider>
      <App />
    </LocationDataContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
