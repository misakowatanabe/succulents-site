import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#fdab3f",
    "&:hover": {
      backgroundColor: "#e9982d",
    },
    fontWeight: "normal",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    boxShadow: "none",
    padding: "14px",
  },
}))(Button);

export default function AddToCartButton() {
  return (
    <div className="addToCartButton">
      {/* <NavLink to="/Succulents"> */}
        <ColorButton
          variant="contained"
          color="primary"
        >
          <ShoppingCartIcon
            className="cartIcon-addToCart"
            style={{ fontSize: "26px" }}
          />
          ADD TO CART
        </ColorButton>
      {/* </NavLink> */}
    </div>
  );
}
