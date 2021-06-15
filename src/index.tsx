import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
