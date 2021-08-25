import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
    <div className="add-to-cart-button">
      <ColorButton variant="contained" color="primary" onClick={onClick}>
        <ShoppingCartIcon
          className="add-to-cart-button-icon"
          style={{ fontSize: "26px" }}
        />
        ADD TO CART
      </ColorButton>
    </div>
  );
}
