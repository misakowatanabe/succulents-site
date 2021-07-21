import React, { useContext } from "react";
import { AppContext } from "../Context";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
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
    typography: {
      padding: theme.spacing(2),
      marginTop: "10px",
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
                    ? "cartPreview-container-mobile"
                    : "cartPreview-container-bigscreen"
                }
              >
                <div className="cartPreview">
                  <div className="titleInCartPreview">YOUR SHOPPING CART</div>
                  <div
                    className={
                      isMobile
                        ? "itemInCartPreview-mobile"
                        : "itemInCartPreview-bigscreen"
                    }
                  >
                    {state.products[0] == null ? (
                      <div className="noProductInCartPreview">
                        There is no product in your cart.
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
                                <div>
                                  <div className="productNameInCartPreview">
                                    {productInCart.name}
                                  </div>
                                  <div className="subInfoInCartPreview">
                                    SEK {productInCart.price}
                                  </div>
                                  <div className="subInfoInCartPreview">
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
        <div style={{ marginTop: "-10px" }}>
          <Button onClick={handleClick("bottom-end")}>
            <ShoppingCartIcon
              className="cartIcon"
              style={{ fontSize: "34px" }}
            />
          </Button>
        </div>
      </div>
    </ClickAwayListener>
  );
}
