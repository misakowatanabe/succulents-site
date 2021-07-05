import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
