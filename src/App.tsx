import React from "react";
import "./style/App.css";
import Navigation from "./commonComponent/Navigation";
import Main from "./Main";
import Footer from "./commonComponent/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Cart from "./Cart";
import { AppProvider } from "./Context";

export default function App() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <AppProvider>
      <div
        className="App"
        style={
          isMobile ? { paddingBottom: "100%" } : { paddingBottom: "362px" }
        }
      >
        <Navigation />
        <Main />
        <Footer />
        <Cart />
      </div>
    </AppProvider>
  );
}

