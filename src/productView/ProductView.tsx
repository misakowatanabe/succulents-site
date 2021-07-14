import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import NotFoundPage from "../NotFoundPage";
import Grid from "@material-ui/core/Grid";
import QuantitySelect from "./QuantitySelect";
import AddToCartButton from "./AddToCartButton";
import { AppContext } from "../Context";
import { Types } from "../Reducers";
import Quantityselect from "./QuantitySelect";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id)!;

  const isMobile = useMediaQuery("(max-width:599px)");

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

  const { dispatch } = React.useContext(AppContext);

  const AddProduct = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: thisProduct.name,
        price: thisProduct.price,
        image: thisProduct.image,
        quantity: form.quantity,
      },
    });
  };

  const [form, setForm] = React.useState({
    name: "",
    quantity: 0,
  });

  const handleForm = (type: string, value: string) => {
    setForm((form) => ({
      ...form,
      [type]: value,
    }));
  };

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
            <div
              className="productViewName"
              style={isMobile ? {} : { display: "none" }}
            >
              {thisProduct.name}
            </div>
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
            <div
              className="productViewName-biggerScreen"
              style={isMobile ? { display: "none" } : {}}
            >
              {thisProduct.name}
            </div>
            <div
              className={
                isMobile
                  ? "productViewDescription-mobile"
                  : "productViewDescription-biggerScreen"
              }
            >
              {thisProduct.description}
              <div className="productViewPrice">SEK {thisProduct.price}</div>
              <Quantityselect
                onChange={(e) => {
                  handleForm("quantity", e.target.value);
                }}
                value={form.quantity}
              />
              <AddToCartButton onClick={AddProduct} />
              <div className="productViewId">ID: {thisProduct.id}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  else return <NotFoundPage />;
}
