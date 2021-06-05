import React from "react";
import CategorySort from "./ProductListSort";
import ProductsOther from "./ProductsOther";

export default function Pots() {
  return (
    <div className="categoryPage">
      <div className="categoryName">Other</div>
      <p className="categoryDescription">
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam?
      </p>
      <CategorySort />
      <ProductsOther />
    </div>
  );
}
