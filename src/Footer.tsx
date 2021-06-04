import ImageGallery from "react-image-gallery";
import galleryImage1 from "./img/galleryImage1.jpg";
import galleryImage2 from "./img/galleryImage2.jpg";
import galleryImage3 from "./img/galleryImage3.jpg";

const images = [
  {
    original: galleryImage1,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: galleryImage2,
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: galleryImage3,
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div style={{ paddingBottom: "30px" }}>
        <div className="galleyText">Follow us on Instagram</div>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={5000}
        />
      </div>
      <div className="footer">
        <div>ABOUT</div>
        <div>HELP</div>
        <div>SHOP</div>
        <div className="lastFooter">
          ©2021 Misako Watanabe Website design and development
        </div>
      </div>
    </div>
  );
}
