import React from "react";
import { useParams } from "react-router-dom";
import SortButton from "./SortButton";
import ProductList from "./ProductList";
import { CategoryData } from "../CategoryData";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  function Row() {
    const { categoryName } = useParams<Params>();
    var selectedCategory: any[] = [];

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
    return <div>{selectedCategory}</div>;
  }

  return (
    <div className="categoryPage">
      <Row />
      <SortButton />
      <ProductList />
    </div>
  );
}
