import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Succulents from "./Succulents";
import Pots from "./Pots";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/succulents-site" component={Home}></Route>
      <Route exact path="/succulents-site/succulents" component={Succulents}></Route>
      <Route exact path="/succulents-site/pots" component={Pots}></Route>
    </Switch>
  );
}
