import React, { useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductData } from "../ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import NotFoundPage from "../NotFoundPage";
import Grid from "@material-ui/core/Grid";
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
                to={`/product/${thisProduct?.category}`}
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
                onChange={handleChange}
                value={quantityState.quantity}
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
