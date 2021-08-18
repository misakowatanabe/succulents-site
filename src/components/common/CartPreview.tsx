import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PopperPlacementType } from "@material-ui/core/Popper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import RichTooltip from "./RichTooltip";
import CartPreviewContents from "./CartPreviewContents";

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

export default function CartPreview() {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const classes = useStyles();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    () => {
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { state } = useContext(AppContext);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <RichTooltip
          content={<CartPreviewContents onClick={handleClickAway} />}
          open={open}
          placement="bottom"
          onClose={() => setOpen(false)}
        >
          <div style={{ marginTop: "-10px", position: "relative" }}>
            <div
              className={
                state.shoppingCart < 10
                  ? "cart-state_container"
                  : state.shoppingCart > 9 && state.shoppingCart < 100
                  ? "cart-state_container-more-than-ten"
                  : "cart-state_container-more-than-hundred"
              }
            >
              {state.shoppingCart < 100 ? (
                <div className="cart-state">{state.shoppingCart}</div>
              ) : (
                <div className="cart-state">99+</div>
              )}
            </div>
            <button onClick={handleClick("bottom-end")} className="cart-icon">
              <ShoppingCartIcon style={{ fontSize: "34px" }} />
            </button>
          </div>
        </RichTooltip>
      </div>
    </ClickAwayListener>
  );
}
