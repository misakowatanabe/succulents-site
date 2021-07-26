import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputSubmitButton from "./InputSubmitButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        width: "10ch",
      },
    },
  })
);

type quantitySelectCartProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  // onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function QuantitySelectCart({ onChange, value }: quantitySelectCartProps) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      // onSubmit={onSubmit}
    >
      <TextField
        className="test"
        id="outlined-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={value}
        onChange={onChange}
      />
      {/* <InputSubmitButton /> */}
    </form>
  );
}
