import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import OmnisendNav from "./sections/navigations/OmnisendNav/OmnisendNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OmnisendNav />
  </React.StrictMode>
);


reportWebVitals();
