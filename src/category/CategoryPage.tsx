import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SortSelect from "./SortSelect";
import ProductList from "./ProductList";
import { CategoryData } from "../CategoryData";
import NotFoundPage from "../NotFoundPage";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();
  var selectedCategory: any[] = [];

  const [sortState, setSortState] = useState<{
    sort: string;
    name: string;
  }>({
    sort: "Best selling",
    name: "sort",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof sortState;
    setSortState({
      ...sortState,
      [name]: event.target.value,
    });
  };

  CategoryData.forEach((item) => {
    if (item.categoryName === categoryName) {
      selectedCategory.push(
        <div key={item.categoryName}>
          <div className="categoryName">{item.categoryName}</div>
          <p className="categoryDescription">{item.description}</p>
        </div>
      );
    }
  });

  if (CategoryData.map((a) => a.categoryName).includes(categoryName))
    return (
      <div className="categoryPage">
        {selectedCategory}
        <SortSelect onChange={handleChange} value={sortState.sort} />
        <ProductList sortState={sortState} />
      </div>
    );
  else return <NotFoundPage />;
}
