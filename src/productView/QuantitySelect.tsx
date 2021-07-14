import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Select from "@material-ui/core/Select";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange: (value: number) => void | Promise<void>;
  value: number;
};

export default function Quantityselect({ onChange, value }: Props) {
// export default function Quantityselect() {
  return (
    <form noValidate autoComplete="off">
      <div className="quantitySelect">
        <Stack flex align="center">
          <Heading type="title4">
            <div className="quantityLabel">Quantity</div>
          </Heading>
          <div
            style={{
              maxWidth: "7em",
            }}
          >
            {/* <Stepper
              onChange={onChange}
              defaultValue={1}
              maxValue={10}
              minValue={1}
              titleIncrement="Increase"
              titleDecrement="Decrease"
            /> */}
          </div>
        </Stack>
        <input
          value={value}
          type="number"
          onChange={onChange}
          min="1"
          max="10"
        />
      </div>
    </form>
  );
}
