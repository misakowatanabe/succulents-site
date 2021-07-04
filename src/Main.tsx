import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CategoryPage from "./category/CategoryPage";
import ProductView from "./productView/ProductView";
import NotFoundPage from "./NotFoundPage";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:categoryName" component={CategoryPage}></Route>
      <Route exact path="/:categoryName/:id" component={ProductView}></Route>
      {/* <Route exact path="*" component={ProductView}></Route> */}
    </Switch>
  );
}
