import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";
import { Types } from "./Reducers";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";

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
      width: "66%",
    },
    content: {
      flex: "1 0 auto",
      padding: "0px 0px 0px 20px",
      paddingBottom: "0 !important",
      position: "relative",
    },
    cover: {
      width: 130,
      height: 130,
    },
  })
);

const Cart = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:599px)");

  const { state, dispatch } = useContext(AppContext);

  const deleteProduct = (id: string, quantity: string, price: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      },
    });
    dispatch({
      type: Types.Decrease,
      payload: {
        quantity,
      },
    });
    dispatch({
      type: Types.SubTotalDecrease,
      payload: {
        price,
        quantity,
      },
    });
  };

  return (
    <div>
      <div
        className={
          isMobile ? "cart-container-mobile" : "cart-container-bigScreen"
        }
      >
        <div className={isMobile ? "" : "cart-bigScreen"}>
          <div className="titleInCartPreview">YOUR SHOPPING CART</div>
          {state.products[0] == null ? (
            <div className="noProductInCartPreview">
              There is no product in your cart.
              <NavLink to="/">
                <div className="continueShoppinginCart">Continue shoppping</div>
              </NavLink>
            </div>
          ) : (
            <div>
              {state.products.map((productInCart) => (
                <Card className={classes.root} key={productInCart.id}>
                  <CardMedia
                    className={classes.cover}
                    image={productInCart.image}
                    title="Product"
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <div className="productNameInCartPreview">
                        {productInCart.name}
                      </div>
                      <div className="subInfoInCartPreview">
                        SEK {productInCart.price}
                      </div>
                      <div className="subInfoInCartPreview">
                        Quantity: {productInCart.quantity}
                      </div>
                      <Button
                        onClick={() =>
                          deleteProduct(
                            productInCart.id,
                            productInCart.quantity,
                            productInCart.price
                          )
                        }
                        className="deleteButtonInCart"
                      >
                        <ClearIcon />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
              <hr style={{ marginTop: "30px" }} />
              <NavLink to="/">
                <div className="continueShoppinginCart">Continue shoppping</div>
              </NavLink>
              <div className="totalQuantityinCart">
                Total Quantity: {state.shoppingCart}
              </div>
              <div className="subTotalinCart">
                Sub Total: SEK {state.shoppingCartSubTotal}
              </div>
              {/* <Button>Proceed to checkout</Button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
