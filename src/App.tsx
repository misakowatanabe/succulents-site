import React from "react";
import "./style/App.css";
import Navigation from "./commonComponent/Navigation";
import Main from "./Main";
import Footer from "./commonComponent/Footer";


const App = () => (
  <div className="App">
    <Navigation />
    <Main />
    <Footer />
  </div>
);

export default App;
