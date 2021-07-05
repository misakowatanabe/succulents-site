import ImageGallery from "react-image-gallery";
import galleryImage1 from "../img/galleryImage1.jpg";
import galleryImage2 from "../img/galleryImage2.jpg";
import galleryImage3 from "../img/galleryImage3.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

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
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ backgroundColor: "#f3f3f3" }} className="footer">
      <Grid
        container
        style={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        <Grid item sm={6} style={{ flexBasis: "auto" }}>
          <div className="followUsText">Follow us on Instagram</div>
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
        </Grid>
        <Grid item sm={6} style={{ flexBasis: "auto" }}>
          <div className="footerLink">
            <div>ABOUT</div>
            <div>HELP</div>
            <div>SHOP</div>
          </div>
        </Grid>
      </Grid>
      <div className="footerCredit">
        ©2021 Misako Watanabe Website design and development
      </div>
    </div>
  );
}
