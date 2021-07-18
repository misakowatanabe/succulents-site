import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type sortProps = {
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  value: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SortButton({ onChange, value }: sortProps) {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <FormControl
      className={isMobile ? "sortButton-mobile" : "sortButton-bigScreen"}
    >
      <NativeSelect
        value={value}
        onChange={onChange}
        name="sort"
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "sort" }}
      >
        <option value="Best selling">Best selling</option>
        <option value="Price, high to low">Price, high to low</option>
        <option value="Price, low to high">Price, low to high</option>
      </NativeSelect>
    </FormControl>
  );
}
