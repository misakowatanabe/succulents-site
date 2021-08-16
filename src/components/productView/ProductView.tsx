import React, { useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../../data/ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import NotFoundPage from "../NotFoundPage";
import Grid from "@material-ui/core/Grid";
import AddToCartButton from "./AddToCartButton";
import { AppContext } from "../../context/Context";
import { Types } from "../../context/Reducers";
import Quantityselect from "./QuantitySelect";

type Params = {
  id: string;
};

export default function Succulent() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id)!;

  const isMobile = useMediaQuery("(max-width:599px)");
  const isBigger = useMediaQuery("(max-width:1350px)");

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

  const { dispatch } = useContext(AppContext);

  const AddProduct = () => {
    dispatch({
      type: Types.Add,
      payload: {
        id: thisProduct.id,
        name: thisProduct.name,
        price: thisProduct.price,
        image: thisProduct.image,
        quantity: quantityState.quantity,
        button: false,
        previousQuantity: quantityState.quantity,
        currentQuantity: quantityState.quantity,
      },
    });
    dispatch({
      type: Types.Increase,
      payload: {
        quantity: quantityState.quantity,
      },
    });
    dispatch({
      type: Types.SubTotalIncrease,
      payload: {
        price: thisProduct.price,
        quantity: quantityState.quantity,
      },
    });
  };

  const [quantityState, setQuantityState] = useState<{
    quantity: string;
    name: string;
  }>({
    quantity: "1",
    name: "quantity",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: number | unknown }>
  ) => {
    const name = event.target.name as keyof typeof quantityState;
    setQuantityState({
      ...quantityState,
      [name]: event.target.value,
    });
  };

  if (thisProduct)
    return (
      <div
        className={
          isMobile
            ? "product-view_mobile"
            : isBigger
            ? "product-view_bigger-screen"
            : "product-view_1280-px"
        }
        style={{ maxWidth: "1280px" }}
      >
        <Grid
          container
          style={{
            justifyContent: "space-between",
            width: "100%",
            margin: "0px auto",
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
            <div className="product-view-category">
              <NavLink to={`/`} style={{ textDecoration: "underline" }}>
                Home
              </NavLink>
              <span> &gt; </span>
              <NavLink
                to={`/product/${thisProduct?.category}`}
                style={{ textDecoration: "underline" }}
              >
                {thisProduct?.category}
              </NavLink>
            </div>
            <div
              className="product-view-name_mobile"
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
                    flexBasis: "55%",
                  }
            }
          >
            <div
              className="product-view-name_bigger-screen"
              style={isMobile ? { display: "none" } : {}}
            >
              {thisProduct.name}
            </div>
            <div
              className={
                isMobile
                  ? "product-view-description_mobile"
                  : "product-view-description_bigger-screen"
              }
            >
              {thisProduct.description}
              <div className="product-view-price">SEK {thisProduct.price}</div>
              <Quantityselect
                onChange={handleChange}
                value={quantityState.quantity}
              />
              <AddToCartButton onClick={AddProduct} />
              <div className="product-view-id">ID: {thisProduct.id}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  else
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <NotFoundPage />
      </div>
    );
}
