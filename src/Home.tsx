import React from "react";
import mainImage from "./img/main.jpg";
import CategoryCard1 from "./CategoryCard1";
import CategoryCard2 from "./CategoryCard2";
import CategoryCard3 from "./CategoryCard3";
import MainButton from "./MainButton";

export default function Home() {
  return (
    <div className="homeBackground">
      <div
        className="mainImage"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <h1 className="mainText">
          Happy Succulent
        </h1>
        <MainButton />
      </div>
      <div className="shopByCategory">Shop By Category</div>
      <CategoryCard1 />
      <CategoryCard2 />
      <CategoryCard3 />
    </div>
  );
}
