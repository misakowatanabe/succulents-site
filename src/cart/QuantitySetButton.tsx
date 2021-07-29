import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  rootInput: {
    "& > *": {
      margin: "10px 0px",
      padding: "5px 10px 5px 10px",
      borderRadius: "4px",
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
        Replace
      </Button>
    </div>
  );
}
