import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PopperPlacementType } from "@material-ui/core/Popper";
import SearchIcon from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import RichTooltip from "./RichTooltip";
import SearchContents from "./SearchContents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      borderRadius: 0,
      overFlow: "hidden",
      paddingTop: "10px",
    },

    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      paddingLeft: 10,
      paddingTop: 0,
      paddingBottom: "0 !important",
    },
    cover: {
      width: 100,
      height: 100,
    },
  })
);

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const classes = useStyles();

  const handleClick = (newPlacement: PopperPlacementType) => () => {
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <RichTooltip
          content={<SearchContents onClick={handleClickAway} />}
          open={open}
          placement="bottom"
          onClose={() => setOpen(false)}
        >
          <div style={{ marginTop: "-10px" }}>
            <button onClick={handleClick("bottom-end")} className="search-icon">
              <SearchIcon style={{ fontSize: "34px" }} />
            </button>
          </div>
        </RichTooltip>
      </div>
    </ClickAwayListener>
  );
}
