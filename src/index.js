import React from "react";
import ReactDOM from "react-dom";

// Bootstrap CSS (must load BEFORE Components)
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
