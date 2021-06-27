import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      marginTop: "200px",
    },
  })
);

export default function MainButton() {
  const classes = useStyles();

  return (
    <div className="mainButton">
      <NavLink to="/succulents-site/Succulents">
        <ColorButton
          variant="contained"
          color="primary"
          className={classes.margin}
          style={{ fontSize: "15px" }}
        >
          Explore
          <KeyboardArrowRightIcon style={{ marginLeft: "13px" }} />
        </ColorButton>
      </NavLink>
    </div>
  );
}
