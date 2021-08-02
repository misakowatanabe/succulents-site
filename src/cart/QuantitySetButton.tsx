import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  rootInput: {
    "& > *": {
      margin: "0px 0px 0px 5px",
      padding: "7px 10px 8px 10px",
      borderRadius: "4px",
      fontSize: "14px",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
      },
    },
  },
}));

type QantitySetButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function InputSubmitButton({ onClick }: QantitySetButtonProps) {
  const classes = useStyles();
  return (
    <div className={classes.rootInput}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Update
      </Button>
    </div>
  );
}
