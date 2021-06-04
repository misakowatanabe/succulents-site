import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
    padding: "10px 21px 10px 30px",
    fontSize: "20px",
    fontWeight: "normal",
    borderRadius: "4px"
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      marginTop: "70%"
    },
  })
);

export default function MainButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Explore
        <ArrowForwardIcon style={{marginLeft: "15px"}}/>
      </ColorButton>
    </div>
  );
}
