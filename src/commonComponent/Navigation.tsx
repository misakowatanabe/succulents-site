import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SearchIcon from "@material-ui/icons/Search";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CategoryData } from "../CategoryData";
import CartPreview from "./CartPreview";

type Anchor = "left";

export default function Navigation() {
  const [drawerState, setDrawerState] = useState({
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

      setDrawerState({ ...drawerState, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {CategoryData.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText>
              <NavLink
                to={`/product/${item.categoryName}`}
                className="drawerLinkText"
              >
                {item.categoryName}
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

  const isMobile = useMediaQuery("(max-width:599px)");
  const isBigScreen = useMediaQuery("(min-width:600px)");

  return (
    <div>
      {isMobile && (
        <div>
          {(["left"] as Anchor[]).map((anchor) => (
            <div key={anchor} className="header" style={style}>
              <React.Fragment key={anchor}>
                <button
                  onClick={toggleDrawer(anchor, true)}
                  className="menuIcon"
                >
                  <MenuIcon style={{ fontSize: "40px" }} />
                </button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={drawerState[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
              <div className="logoMobile">
                <NavLink to="/">
                  Happy
                  <br />
                  Succulent
                </NavLink>
              </div>
              <SearchIcon className="searchIcon" style={{ fontSize: "34px" }} />
              <CartPreview />
            </div>
          ))}
        </div>
      )}
      {isBigScreen && (
        <div className="header" style={style}>
          <div className="logoBigScreen">
            <NavLink to="/">
              Happy
              <br />
              Succulent
            </NavLink>
          </div>
          {CategoryData.map((item, index) => (
            <NavLink
              to={`/product/${item.categoryName}`}
              className="navLinkText"
              key={index}
            >
              {item.categoryName}
            </NavLink>
          ))}
          <SearchIcon className="searchIcon" style={{ fontSize: "34px" }} />
          <CartPreview />
        </div>
      )}
    </div>
  );
}
