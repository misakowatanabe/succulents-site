import React, { useContext } from "react";
import { AppContext } from "./Context";
import { Types } from "./Reducers";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  })
);

const Cart = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(AppContext);

  const deleteProduct = (id: string, quantity: string) => {
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
  };

  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <div>YOUR SHOPPING CART</div>
        <div>{state.shoppingCart}</div>
        {state.products.map((productInCart) => (
          <Card className={classes.root} key={productInCart.id}>
            <CardMedia
              className={classes.cover}
              image={productInCart.image}
              title="Product"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {productInCart.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  SEK {productInCart.price}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Quantity: {productInCart.quantity}
                </Typography>
                <button
                  onClick={() =>
                    deleteProduct(productInCart.id, productInCart.quantity)
                  }
                >
                  delete
                </button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
