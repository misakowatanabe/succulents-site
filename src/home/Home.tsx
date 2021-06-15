import React from "react";
import mainImage from "../img/main.jpg";
import CategoryCard1 from "./CategoryCard1";
import CategoryCard2 from "./CategoryCard2";
import CategoryCard3 from "./CategoryCard3";
import MainButton from "./MainButton";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  return (
    <div className="homeBackground">
      <div
        className="mainImage"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <h1 className="mainText">Happy Succulent</h1>
        <MainButton />
      </div>
      <div className="shopByCategory">Shop By Category</div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
            <CategoryCard1 />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <CategoryCard2 />
        </Grid>
        <Grid item xs={12} sm={6}md={4}>
            <CategoryCard3 />
        </Grid>
      </Grid>
    </div>
  );
}
