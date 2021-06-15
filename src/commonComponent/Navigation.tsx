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

  const home = (
    <NavLink to="/succulents-site" className="drawerLinkText">
      Home
      <KeyboardArrowRightIcon
        className="ArrowIcon"
        style={{ fontSize: "30px" }}
      />
    </NavLink>
  );
  const succulents = (
    <NavLink to="/succulents-site/succulents" className="drawerLinkText">
      Succulents
      <KeyboardArrowRightIcon
        className="ArrowIcon"
        style={{ fontSize: "30px" }}
      />
    </NavLink>
  );
  const pots = (
    <NavLink to="/succulents-site/pots" className="drawerLinkText">
      Pots
      <KeyboardArrowRightIcon
        className="ArrowIcon"
        style={{ fontSize: "30px" }}
      />
    </NavLink>
  );
  const other = (
    <NavLink to="/succulents-site/other" className="drawerLinkText">
      Other
      <KeyboardArrowRightIcon
        className="ArrowIcon"
        style={{ fontSize: "30px" }}
      />
    </NavLink>
  );

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[home, succulents, pots, other].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
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
          <NavLink to="/succulents-site/succulents" className="navLinkText">
            Succulents
          </NavLink>
          <NavLink to="/succulents-site/pots" className="navLinkText">
            Pots
          </NavLink>
          <NavLink to="/succulents-site/other" className="navLinkText">
            Other
          </NavLink>
          <SearchIcon className="searchIcon" style={{ fontSize: "34px" }} />
          <ShoppingCartIcon className="cartIcon" style={{ fontSize: "34px" }} />
        </div>
      )}
    </div>
  );
}
