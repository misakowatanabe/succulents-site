import React from "react";
import "./style/App.css";
import Navigation from "./commonComponent/Navigation";
import Main from "./Main";
import Footer from "./commonComponent/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function App() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div
      className="App"
      style={isMobile ? { paddingBottom: "100%" } : { paddingBottom: "362px" }}
    >
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

