import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.Suspense fallback="loading">
    <React.StrictMode>
  <App/>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById("root")
);
