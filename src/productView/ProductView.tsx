import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../ProductData";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id);

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className={isMobile ? "productView-mobile" : "productView-bigScreen"}>
      <div className="productViewCategory">
        <NavLink
          to={`/succulents-site`}
          style={{ textDecoration: "underline" }}
        >
          Home
        </NavLink>
        <span> &gt; </span>
        <NavLink
          to={`/succulents-site/${thisProduct?.category}`}
          style={{ textDecoration: "underline" }}
        >
          {thisProduct?.category}
        </NavLink>
      </div>
      <div className="productViewName">{thisProduct?.name}</div>
      <div className="productViewPrice">SEK {thisProduct?.price}</div>
      <CardMedia
        component="img"
        alt={`${thisProduct?.name}`}
        image={thisProduct?.image}
        title={`${thisProduct?.name}`}
        style={{ width: "100%" }}
      />
      <div>ID: {thisProduct?.id}</div>
    </div>
  );
}
