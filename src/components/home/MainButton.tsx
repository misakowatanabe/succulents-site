import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "rgb(255,255,255,0.9)",
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.9)",
    },
    padding: "10px 18px 10px 30px",
    fontSize: "20px",
    fontWeight: "normal",
    borderRadius: "24px",
  },
}))(Button);

export default function MainButton() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div className={isMobile ? "main-button_mobile" : "main-button_bigger-screen"}>
      <NavLink to="product/Succulents">
        <ColorButton
          variant="contained"
          color="primary"
          style={{ fontSize: "15px" }}
        >
          Explore
          <KeyboardArrowRightIcon style={{ marginLeft: "13px" }} />
        </ColorButton>
      </NavLink>
    </div>
  );
}
