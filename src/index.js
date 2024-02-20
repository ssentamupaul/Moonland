import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../src/pages/Css/About.css";
import "../src/pages/Css/Footer.css";
import "../src/pages/Css/Nav.css";
import "../src/pages/Css/Staff.css";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
