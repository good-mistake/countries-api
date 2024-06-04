import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faArrowLeft,
  faMoon as faSolidMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as faRegularMoon } from "@fortawesome/free-regular-svg-icons";
import { faSearch as faSolidSearch } from "@fortawesome/free-solid-svg-icons";
library.add(
  faSolidMoon,
  faRegularMoon,
  faSolidSearch,
  faAngleDown,
  faArrowLeft
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
