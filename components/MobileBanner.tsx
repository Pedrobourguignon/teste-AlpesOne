import Image from "next/image";
import mobileBanner from "../public/images/mobile-banner.png";

import "../styles/components/mobileBanner.sass";

export const MobileBanner = () => {
  return (
    <div className="mobile-banner-container">
      <Image
        src={mobileBanner}
        alt="mobile banner"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="carousel">
        <div className="carousel-navigator-selected" />
        <div className="carousel-navigator" />
        <div className="carousel-navigator" />
      </div>
    </div>
  );
};
