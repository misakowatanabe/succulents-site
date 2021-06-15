import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Succulents from "./productList/Succulents";
import Pots from "./productList/Pots";
import Other from "./productList/Other";
import ProductPageSucculent from "./productPage/ProductPageSucculent";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/succulents-site" component={Home}></Route>
      <Route
        exact
        path="/succulents-site/succulents"
        component={Succulents}
      ></Route>
      <Route exact path="/succulents-site/pots" component={Pots}></Route>
      <Route exact path="/succulents-site/other" component={Other}></Route>
      <Route
        exact
        path="/succulents-site/productPageSucculent"
        component={ProductPageSucculent}
      ></Route>
    </Switch>
  );
}
