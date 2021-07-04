import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import NotFoundPage from "../NotFoundPage";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id)!;

  const isMobile = useMediaQuery("(max-width:950px)");
  const isBigScreen = useMediaQuery("(min-width:950px)");

  const images = [
    {
      original: thisProduct?.image,
      thumbnail: thisProduct?.image,
    },
    {
      original: thisProduct?.image,
      thumbnail: thisProduct?.image,
    },
    {
      original: thisProduct?.image,
      thumbnail: thisProduct?.image,
    },
  ];

  if (thisProduct)
    return (
      <div
        className={isMobile ? "productView-mobile" : "productView-bigScreen"}
      >
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
        <div>
          <div className="productViewName">{thisProduct.name}</div>
          <div className="productViewPrice">SEK {thisProduct.price}</div>
          <ImageGallery
            items={images}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
            slideInterval={50000}
            showNav={false}
          />
          <div className="productViewId">ID: {thisProduct.id}</div>
          <div className="productViewDescription">
            {thisProduct.description}
          </div>
        </div>
      </div>
    );
  else return <NotFoundPage />;
}
