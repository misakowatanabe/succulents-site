import React from "react";
import { useParams } from "react-router-dom";
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
        This category is no longer available.
      </div>
    </div>
  );
}
