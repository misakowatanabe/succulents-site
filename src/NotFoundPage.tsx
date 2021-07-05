import React from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function NotFoundPage() {
  const isMobile = useMediaQuery("(max-width:950px)");

  return (
    <div
      className={
        isMobile
          ? "categoryNotAvailableContainer-mobile"
          : "categoryNotAvailableContainer-bigscreen"
      }
    >
      <div className="categoryNotAvailable">
        This page is no longer available.
        <p>
          <NavLink to={`/`} style={{ textDecoration: "underline" }}>
            Home
          </NavLink>
        </p>
      </div>
    </div>
  );
}
