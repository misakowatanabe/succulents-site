import React from "react";
import CategorySort from "./ProductListSort";
import ProductsSucculents from "./ProductsSucculents";

export default function Succulents() {
  return (
    <div className="categoryPage">
        <div className="categoryName">Succulents</div>
        <p className="categoryDescription">
          Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
          corporis fuga saepe distinctio ipsam?
        </p>
      <CategorySort />
      <ProductsSucculents />
    </div>
  );
}
