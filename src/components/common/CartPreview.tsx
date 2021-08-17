import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
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

export default function CartPreview() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const classes = useStyles();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { state } = useContext(AppContext);

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div
                className={
                  isMobile
                    ? "cart-preview_container_mobile"
                    : "cart-preview_container_bigger-screen"
                }
              >
                <div className="cart-preview">
                  <div className="title-in-cart-preview">
                    YOUR SHOPPING CART
                  </div>
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
                              onClick={handleClickAway}
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
                  <GoToCartButton onClick={handleClickAway} />
                </div>
              </div>
            </Fade>
          )}
        </Popper>
        <div style={{ marginTop: "-10px", position: "relative" }}>
          <div
            className={
              state.shoppingCart < 10
                ? "cart-state_container"
                : state.shoppingCart > 9 && state.shoppingCart < 100
                ? "cart-state_container-more-than-ten"
                : "cart-state_container-more-than-hundred"
            }
          >
            {state.shoppingCart < 100 ? (
              <div className="cart-state">{state.shoppingCart}</div>
            ) : (
              <div className="cart-state">99+</div>
            )}
          </div>
          <button onClick={handleClick("bottom-end")} className="cart-icon">
            <ShoppingCartIcon style={{ fontSize: "34px" }} />
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
}
