import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GoToCartButton from "./GoToCartButton"; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      borderRadius: 0,
      overFlow: "hidden",
      paddingTop: "10px",
    },

    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      paddingLeft: 10,
      paddingTop: 0,
      paddingBottom: "0 !important",
    },
    cover: {
      width: 100,
      height: 100,
    },
  })
);

type CartPreviewContentsProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function CartPreviewContents({
  onClick,
}: CartPreviewContentsProps) {
  const classes = useStyles();

  const { state } = useContext(AppContext);

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div>
      <Fade timeout={350}>
        <div style={{ visibility: "visible", opacity: "inherit" }}>
          <div
            className={
              isMobile
                ? "cart-preview_container_mobile"
                : "cart-preview_container_bigger-screen"
            }
          >
              <div className="title-in-cart-preview">YOUR SHOPPING CART</div>
              <div
                className={
                  isMobile
                    ? "item-in-cart-preview_mobile"
                    : "item-in-cart-preview_bigger-screen"
                }
              >
                {state.products[0] == null ? (
                  <div className="no-product-in-cart-preview">
                    There is no product in your cart.
                  </div>
                ) : (
                  <div>
                    {state.products.map((productInCart) => (
                      <Card className={classes.root} key={productInCart.id}>
                        <NavLink
                          to={`/product/${productInCart.category}/${productInCart.id}`}
                          onClick={onClick}
                        >
                          <CardMedia
                            className={classes.cover}
                            image={productInCart.image}
                            title="Product"
                          />
                        </NavLink>
                        <div className={classes.details}>
                          <CardContent className={classes.content}>
                            <div>
                              <div className="product-name-in-cart-preview">
                                {productInCart.name}
                              </div>
                              <div className="sub-info-in-cart-preview">
                                SEK {productInCart.price}
                              </div>
                              <div className="sub-info-in-cart-preview">
                                Quantity: {productInCart.quantity}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              <GoToCartButton onClick={onClick} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
