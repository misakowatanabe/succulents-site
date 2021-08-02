import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#bababa",
    "&:hover": {
      backgroundColor: "#a6a6a6",
      boxShadow: "none",
    },
    fontWeight: "normal",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    boxShadow: "none",
    padding: "14px",
  },
}))(Button);

export default function ContinueShoppingButton() {
  return (
    <div className="goToCartButton">
      <NavLink to="/">
        <ColorButton variant="contained" color="primary">
          <KeyboardReturnIcon
            className="cartIcon-addToCart"
            style={{ fontSize: "26px" }}
          />
          Continue Shopping
        </ColorButton>
      </NavLink>
    </div>
  );
}
