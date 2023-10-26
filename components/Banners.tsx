import Image from "next/image";
import mobileBanner from "../public/images/mobile-banner.png";
import desktopBanner from "../public/images/desktop-banner.jpg";
import { useMediaQuery } from "@chakra-ui/react";
import { IFormData } from "@/types/IFormData";
import { ContactCard } from "./ContactCard";
import "../styles/components/banners.sass";

export const Banners = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1300] = useMediaQuery("(min-width: 1300px)");

  const handleSubmit = (formData: IFormData) => {
    console.log(formData);
  };

  return (
    <div className="mobile-banner-container">
      <Image
        src={isLargerThan768 ? desktopBanner : mobileBanner}
        alt="banner"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {isLargerThan1300 && <ContactCard handleSubmit={handleSubmit} />}
      <div className="carousel">
        <div className="carousel-navigator-selected" />
        <div className="carousel-navigator" />
        <div className="carousel-navigator" />
      </div>
    </div>
  );
};
