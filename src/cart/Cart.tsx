import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context";
import { Types } from "../Reducers";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import QuantitySelectCart from "./QuantitySelectCart";
import QuantitySetButton from "./QuantitySetButton";
import QuantitySelectCart2 from "./QuantitySelectCart2";

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

  const handleChangeQuantity_TextField = (id: string, payload: string) => {
    dispatch({
      type: Types.QuantityChange_TextField,
      payload: { id, quantity: payload },
    });
  };

  const handleUpdateQuantity_TextField = (
    id: string,
    quantity: string,
    price: number
  ) => {
    dispatch({
      type: Types.QuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.TotalQuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_TextField,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if(quantity === "0"){
      deleteProduct(id, quantity, price);
    }
  };

  const handleUpdateQuantity_DropDown = (
    id: string,
    quantity: string,
    price: number,
    payload: unknown
  ) => {
    dispatch({
      type: Types.QuantitySet_DropDown,
      payload: { id, quantity: payload },
    });
    dispatch({
      type: Types.TotalQuantitySet_DropDown,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_DropDown,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if (payload === "0") {
      deleteProduct(id, payload, price);
    }
  };

  const deleteProduct = (id: string, quantity: string, price: number) => {
    dispatch({
      type: Types.Delete,
      payload: { id },
    });
    dispatch({
      type: Types.Decrease,
      payload: { quantity },
    });
    dispatch({
      type: Types.SubTotalDecrease,
      payload: { price, quantity },
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
                <div key={productInCart.id}>
                  <Card className={classes.root}>
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
                        <div>{productInCart.button}</div>
                        {parseInt(productInCart.currentQuantity) >= 10 && (
                          <div>
                            <QuantitySelectCart
                              onChange={(e) =>
                                handleChangeQuantity_TextField(
                                  productInCart.id,
                                  e.target.value.toString()
                                )
                              }
                              value={productInCart.quantity}
                            />
                            <div>
                              {productInCart.button === true && (
                                <QuantitySetButton
                                  onClick={() =>
                                    handleUpdateQuantity_TextField(
                                      productInCart.id,
                                      productInCart.quantity,
                                      productInCart.price
                                    )
                                  }
                                />
                              )}
                            </div>
                          </div>
                        )}
                        {parseInt(productInCart.currentQuantity) <= 9 && (
                          <QuantitySelectCart2
                            onChange={(e) =>
                              handleUpdateQuantity_DropDown(
                                productInCart.id,
                                productInCart.quantity,
                                productInCart.price,
                                e.target.value
                              )
                            }
                            value={productInCart.quantity}
                          />
                        )}
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
                </div>
              ))}
              <hr style={{ marginTop: "30px" }} />
              <NavLink to="/">
                <div className="continueShoppinginCart">Continue shoppping</div>
              </NavLink>
              {!state.shoppingCart && !state.shoppingCartSubTotal ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <div className="totalQuantityinCart">
                    Total Quantity: {state.shoppingCart}
                  </div>
                  <div className="subTotalinCart">
                    Sub Total: SEK {state.shoppingCartSubTotal}
                  </div>
                </div>
              )}
              {/* <Button>Proceed to checkout</Button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
