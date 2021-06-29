import ImageGallery from "react-image-gallery";
import galleryImage1 from "../img/galleryImage1.jpg";
import galleryImage2 from "../img/galleryImage2.jpg";
import galleryImage3 from "../img/galleryImage3.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const images = [
  {
    original: galleryImage1,
  },
  {
    original: galleryImage2,
  },
  {
    original: galleryImage3,
  },
];

export default function Footer() {
  const isMobile = useMediaQuery("(max-width:950px)");

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div className={isMobile ? "footer-mobile" : "footer-bigScreen"}>
        <div className="galleyText">Follow us on Instagram</div>
        <div className={isMobile ? "" : "imageGalley"}>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={50000}
          />
        </div>
        <span className="footerLink">
          <div>ABOUT</div>
          <div>HELP</div>
          <div>SHOP</div>
        </span>
        <div className="footerCredit">
          ©2021 Misako Watanabe Website design and development
        </div>
      </div>
    </div>
  );
}
