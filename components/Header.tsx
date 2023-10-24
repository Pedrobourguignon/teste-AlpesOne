import Image from "next/image";
import BMWLOGO from "/public/images/logo-bmw-rio.svg";
import phoneIcon from "/public/icons/telefone.svg";
import { contactNumber } from "@/utils/contactNumber";
import "../styles/components/header.sass";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-contact">
          <Image src={phoneIcon} alt="Phone Icon" width={19} height={19} />
          <a>{contactNumber}</a>
        </div>
        <Image
          src={BMWLOGO}
          alt="BMW LOGO"
          objectFit="cover"
          width={34.5}
          height={34.5}
        />
      </div>
    </div>
  );
};
