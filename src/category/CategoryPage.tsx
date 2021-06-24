import React from "react";
import { useParams } from "react-router-dom";
import SortButton from "./SortButton";
import ProductList from "./ProductList";

type Params = {
  category: string;
};

export default function CategoryPage() {
  const { category } = useParams<Params>();
  return (
    <div className="categoryPage">
      <div className="categoryName">{category}</div>
      <p className="categoryDescription">
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam?
      </p>
      <SortButton />
      <ProductList />
    </div>
  );
}
