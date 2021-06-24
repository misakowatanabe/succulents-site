import React from "react";
import mainImage from "../img/main.jpg";
import CategoryCard from "./CategoryCard";
import MainButton from "./MainButton";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  const succulents = "Succulents";
  const pots = "Pots";
  const other = "Other";

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
        {[succulents, pots, other].map((text, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CategoryCard text={text} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
