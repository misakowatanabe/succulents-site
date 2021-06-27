import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SortButton() {
  const classes = useStyles();
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: "",
    name: "hai",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const isMobile = useMediaQuery("(max-width:750px)");

  return (
    <FormControl className={isMobile ? "sortButton-mobile" : "sortButton-bigScreen"}>
      <NativeSelect
        value={state.age}
        onChange={handleChange}
        name="age"
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "age" }}
      >
        <option value="Best selling">Best selling</option>
        <option value="Price, high to low">Price, high to low</option>
        <option value="Price, low to high">Price, low to high</option>
      </NativeSelect>
    </FormControl>
  );
}
