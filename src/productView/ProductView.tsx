import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import NotFoundPage from "../NotFoundPage";
import Grid from "@material-ui/core/Grid";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id)!;

  const isMobile = useMediaQuery("(max-width:600px)");

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
        <Grid
          container
          style={{
            justifyContent: "space-evenly",
            maxWidth: "1100px",
            margin: "0px auto 0px auto",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={
              isMobile
                ? {}
                : {
                    flexBasis: "45%",
                  }
            }
          >
            <div className="productViewCategory">
              <NavLink to={`/`} style={{ textDecoration: "underline" }}>
                Home
              </NavLink>
              <span> &gt; </span>
              <NavLink
                to={`/${thisProduct?.category}`}
                style={{ textDecoration: "underline" }}
              >
                {thisProduct?.category}
              </NavLink>
            </div>
            <div className="productViewName">{thisProduct.name}</div>
            <div className="productViewPrice">SEK {thisProduct.price}</div>
            <ImageGallery
              items={images}
              showThumbnails={true}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={false}
              showNav={false}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={
              isMobile
                ? {}
                : {
                    flexBasis: "45%",
                  }
            }
          >
            <div className={isMobile ? "productViewDescription-mobile" : "productViewDescription-biggerScreen"}>
              {thisProduct.description}
            </div>
            <div className="productViewId">ID: {thisProduct.id}</div>
          </Grid>
        </Grid>
      </div>
    );
  else return <NotFoundPage />;
}
