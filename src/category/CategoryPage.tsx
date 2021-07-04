import React from "react";
import { useParams } from "react-router-dom";
import SortButton from "./SortButton";
import ProductList from "./ProductList";
import { CategoryData } from "../CategoryData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NotFoundPage from "../NotFoundPage";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();
  var selectedCategory: any[] = [];

  const isMobile = useMediaQuery("(max-width:950px)");

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
  if (CategoryData.map((a) => a.categoryName).includes(categoryName))
    return (
      <div className="categoryPage">
        {selectedCategory}
        <SortButton />
        <ProductList />
      </div>
    );
  else return <NotFoundPage />;
}
