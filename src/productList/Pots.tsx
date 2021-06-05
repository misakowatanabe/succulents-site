import React from "react";
import CategorySort from "./ProductListSort";
import ProductsPots from "./ProductsPots";

export default function Pots() {
  return (
    <div className="categoryPage">
      <div className="categoryName">Pots</div>
      <p className="categoryDescription">
        Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
        corporis fuga saepe distinctio ipsam?
      </p>
      <CategorySort />
      <ProductsPots />
    </div>
  );
}
