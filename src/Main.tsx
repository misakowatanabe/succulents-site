import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CategoryPage from "./category/CategoryPage";
import ProductView from "./productView/ProductView";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/succulents-site" component={Home}></Route>
      <Route
        exact
        path="/succulents-site/:categoryName"
        component={CategoryPage}
      ></Route>
      <Route
        exact
        path={`/succulents-site/:categoryName/:id`}
        component={ProductView}
      ></Route>
    </Switch>
  );
}
