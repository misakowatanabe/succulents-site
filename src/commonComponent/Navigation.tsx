import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type Anchor = "left";

export default function Navigation() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const succulents = "Succulents";
  const pots = "Pots";
  const other = "Other";

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[succulents, pots, other].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText>
              <NavLink to={`/succulents-site/${text}`} className="drawerLinkText">
                {text}
                <KeyboardArrowRightIcon
                  className="ArrowIcon"
                  style={{ fontSize: "30px" }}
                />
              </NavLink>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const [change, setChange] = useState(false);
  const changePosition = 50;
  let position = useWindowScrollPosition();
  if (position.y > changePosition && !change) {
    setChange(true);
  }
  if (position.y <= changePosition && change) {
    setChange(false);
  }
  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: "400ms ease",
  };

  const isMobile = useMediaQuery("(max-width:688px)");
  const isBigScreen = useMediaQuery("(min-width:688px)");

  return (
    <div className="test">
      {isMobile && (
        <div>
          {(["left"] as Anchor[]).map((anchor) => (
            <div key={anchor} className="header" style={style}>
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon className="menuIcon" style={{ fontSize: "40px" }} />
                </Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
              <div className="logoMobile">
                <NavLink to="/succulents-site">Happy Succulent</NavLink>
              </div>
              <SearchIcon className="searchIcon" style={{ fontSize: "34px" }} />
              <ShoppingCartIcon
                className="cartIcon"
                style={{ fontSize: "34px" }}
              />
            </div>
          ))}
        </div>
      )}
      {isBigScreen && (
        <div className="header" style={style}>
          <div className="logoBigScreen">
            <NavLink to="/succulents-site">Happy Succulent</NavLink>
          </div>
          {[succulents, pots, other].map((text, index) => (
            <NavLink to={`/succulents-site/${text}`} className="navLinkText" key={index}>
              {text}
            </NavLink>
          ))}
          <SearchIcon className="searchIcon" style={{ fontSize: "34px" }} />
          <ShoppingCartIcon className="cartIcon" style={{ fontSize: "34px" }} />
        </div>
      )}
    </div>
  );
}
