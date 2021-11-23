import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserDataContextProvider from "./store-ctx/user-data-ctx";

ReactDOM.render(
  <BrowserRouter>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
