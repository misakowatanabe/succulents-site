import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Quantityselect() {
  return (
    <form noValidate autoComplete="off">
      <div className="quantitySelect">
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          defaultValue="1"
        />
      </div>
    </form>
  );
}
