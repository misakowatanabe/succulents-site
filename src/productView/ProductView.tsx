import React from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../ProductData";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id);

 return (
   <div className="productView">
     <div>{thisProduct?.category}</div>
     <div className="productViewName">{thisProduct?.name}</div>
     <div>SEK {thisProduct?.price}</div>
     <img src={thisProduct?.image} alt="productImage" width="400" />
     <div>ID: {thisProduct?.id}</div>
   </div>
 );
}
