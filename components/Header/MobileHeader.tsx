import Image from "next/image";
import BMWLOGO from "/public/images/logo-bmw-rio.svg";
import { contactNumber } from "@/utils/contactNumber";
import "../../styles/components/mobileHeader.sass";
import { PhoneIcon } from "../Icons/PhoneIcon";

export const MobileHeader = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-contact">
          <PhoneIcon color="#666666" width="19px" height="19px" />
          <p>{contactNumber}</p>
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
