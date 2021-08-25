import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#bababa",
    "&:hover": {
      backgroundColor: "#a6a6a6",
      boxShadow: "none",
    },
    fontWeight: "normal",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    boxShadow: "none",
    padding: "14px",
  },
}))(Button);

type SearchButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  value: string;
};

export default function SearchButton({ onClick, value }: SearchButtonProps) {
  return (
    <div className="search-button">
      {value !== "" && (
        <NavLink to={`/search/query=${value}`}>
          <ColorButton onClick={onClick} variant="contained" color="primary">
            Search
          </ColorButton>
        </NavLink>
      )}
      {value === "" && (
        <ColorButton variant="contained" color="primary">
          Search
        </ColorButton>
      )}
    </div>
  );
}
