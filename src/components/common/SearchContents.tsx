import React from "react";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchButton from "./SearchButton";

type SearchProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function SearchContents({ onClick }: SearchProps) {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div>
      <Fade timeout={350}>
        <div style={{ visibility: "visible", opacity: "inherit" }}>
          <div
            className={
              isMobile
                ? "cart-preview_container_mobile"
                : "cart-preview_container_bigger-screen"
            }
          >
            <SearchButton onClick={onClick} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
