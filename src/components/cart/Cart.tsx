import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { Types } from "../../context/Reducers";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import QuantitySelectCartTextField from "./QuantitySelectCart_TextField";
import QuantitySetButton from "./QuantitySetButton";
import QuantitySelectCartDropDown from "./QuantitySelectCart_DropDown";
import CheckOutButton from "./CheckOutButton";
import ContinueShoppingButton from "./ContinueShoppingButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      borderRadius: 0,
      overFlow: "hidden",
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
  const isBigger = useMediaQuery("(max-width:1350px)");

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
    if (quantity === "0") {
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
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <div
        className={
          isMobile
            ? "cart_container_mobile"
            : isBigger
            ? "cart_container_bigger-screen"
            : "cart_container_over1280px"
        }
      >
        <div className="title-in-cart">YOUR SHOPPING CART</div>
        {state.products[0] == null ? (
          <div className="no-product-in-cart-preview">
            There is no product in your cart.
            <div style={{ maxWidth: "270px" }}>
              <ContinueShoppingButton />
            </div>
          </div>
        ) : (
          <div>
            {!isMobile && (
              <div>
                <hr />
                <div
                  style={{
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ width: "130px" }}></div>
                  <div style={{ flexBasis: "20%" }}>Item</div>
                  <div style={{ width: "91px" }}>Quantity</div>
                  <div style={{ minWidth: "40px" }}>Price</div>
                  <div style={{ width: "40px" }}></div>
                </div>
              </div>
            )}
            {state.products.map((productInCart) => (
              <div key={productInCart.id}>
                <hr />
                {isMobile ? (
                  <div>
                    <Card className={classes.root}>
                      <NavLink
                        to={`/product/${productInCart.category}/${productInCart.id}`}
                      >
                        <CardMedia
                          className={classes.cover}
                          image={productInCart.image}
                        />
                      </NavLink>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <div className="product-name-in-cart_mobile">
                            {productInCart.name}
                          </div>
                          <div className="quantity-select-title-in-cart_mobile">
                            Quantity:
                          </div>
                          {parseInt(productInCart.currentQuantity) >= 10 && (
                            <div style={{ flexGrow: 1 }}>
                              <Grid
                                container
                                style={{ justifyContent: "flex-start" }}
                              >
                                <Grid item xs={6} style={{ flexBasis: "0%" }}>
                                  <QuantitySelectCartTextField
                                    onChange={(e) =>
                                      handleChangeQuantity_TextField(
                                        productInCart.id,
                                        e.target.value.toString()
                                      )
                                    }
                                    value={productInCart.quantity}
                                  />
                                </Grid>
                                <Grid item xs={6}>
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
                                </Grid>
                              </Grid>
                            </div>
                          )}
                          {parseInt(productInCart.currentQuantity) <= 9 && (
                            <QuantitySelectCartDropDown
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
                          <div className="price-in-cart_mobile">
                            {productInCart.price} kr
                          </div>
                          <Button
                            onClick={() =>
                              deleteProduct(
                                productInCart.id,
                                productInCart.quantity,
                                productInCart.price
                              )
                            }
                            className="delete-button-in-cart_mobile"
                          >
                            <ClearIcon />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <NavLink
                        to={`/product/${productInCart.category}/${productInCart.id}`}
                      >
                        <CardMedia
                          className={classes.cover}
                          image={productInCart.image}
                        />
                      </NavLink>
                      <div
                        className="product-name-in-cart_bigger-screen"
                        style={{ flexBasis: "20%" }}
                      >
                        {productInCart.name}
                      </div>
                      {parseInt(productInCart.currentQuantity) >= 10 && (
                        <div>
                          <QuantitySelectCartTextField
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
                        <QuantitySelectCartDropDown
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
                      <div className="price-in-cart_bigger-screen">
                        {productInCart.price} kr
                      </div>
                      <Button
                        onClick={() =>
                          deleteProduct(
                            productInCart.id,
                            productInCart.quantity,
                            productInCart.price
                          )
                        }
                        className="delete-button-in-cart_bigger-screen"
                      >
                        <ClearIcon />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <hr />
            <div className="total-in-cart">
              {!state.shoppingCart && !state.shoppingCartSubTotal ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <div className="total-quantity-in-cart">
                      Total Quantity:
                    </div>
                    <div className="total-quantity-in-cart">
                      {state.shoppingCart}
                    </div>
                  </div>
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <div className="sub-total-in-cart">Subtotal:</div>
                    <div className="sub-total-in-cart">
                      SEK {state.shoppingCartSubTotal}
                    </div>
                  </div>
                </div>
              )}
              <ContinueShoppingButton />
              <CheckOutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
