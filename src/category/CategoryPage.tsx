import React from "react";
import { useParams } from "react-router-dom";
import SortButton from "./SortButton";
import ProductList from "./ProductList";
import { CategoryData } from "../CategoryData";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();
  var selectedCategory: any[] = [];

  const isMobile = useMediaQuery("(max-width:950px)");

  function Row() {
    CategoryData.forEach((category) => {
      if (category.categoryName === categoryName) {
        selectedCategory.push(
          <div key={category.categoryName}>
            <div className="categoryName">{category.categoryName}</div>
            <p className="categoryDescription">{category.description}</p>
          </div>
        );
      }
    });
    return (
      <div>
        {selectedCategory}
        <SortButton />
        <ProductList />
      </div>
    );
  }

  return (
    <div className="categoryPage">
      {!CategoryData.map((a) => a.categoryName).includes(categoryName) ? (
        <div
          className={
            isMobile
              ? "categoryNotAvailableContainer-mobile"
              : "categoryNotAvailableContainer-bigscreen"
          }
        >
          <div className="categoryNotAvailable">
            This category is no longer available.
          </div>
        </div>
      ) : (
        <div>
          <Row />
        </div>
      )}
    </div>
  );
}
