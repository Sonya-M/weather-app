import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LocationDataContextProvider from "./store-ctx/location-data-ctx";

// TODO: delete ctx once you finish the redux store
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <BrowserRouter>
    <LocationDataContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LocationDataContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
