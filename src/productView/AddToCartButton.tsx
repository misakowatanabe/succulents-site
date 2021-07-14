import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#fdab3f",
    "&:hover": {
      backgroundColor: "#e9982d",
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

type AddToCartButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <div className="addToCartButton">
      <ColorButton variant="contained" color="primary" onClick={onClick}>
        <ShoppingCartIcon
          className="cartIcon-addToCart"
          style={{ fontSize: "26px" }}
        />
        ADD TO CART
      </ColorButton>
    </div>
  );
}
