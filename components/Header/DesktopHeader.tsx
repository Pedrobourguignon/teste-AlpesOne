import { useState } from "react";
import Image from "next/image";
import { contactNumber } from "@/utils/contactNumber";
import Dropdown from "../DropDown";
import { GlobalIcon } from "../Icons/GlobalIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import "../../styles/components/desktopHeader.sass";

export const DesktopHeader = () => {
  const modelsList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "X",
    "Z",
    "M",
    "i",
    "Plug-in-Hybrid",
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="desktop-header-container">
      <Dropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
      <div className="desktop-content">
        <div className="header-menu">
          <div className="contact-session">
            <button className="phone">
              <div className="phone-content">
                <PhoneIcon width="19px" height="19px" color="white" />
                <p>{contactNumber}</p>
              </div>
            </button>
            <button className="virtual-tour">
              <div className="virtual-tour-content">
                <GlobalIcon color="white" width="19px" height="19px" />
                <p>TOUR VIRTUAL</p>
              </div>
            </button>
            <button className="whatsapp">
              <div className="whatsapp-content">
                <WhatsappIcon color="white" width="19px" height="19px" />
                <p>WHATSAPP</p>
              </div>
            </button>
          </div>
          <div className="models-container">
            {modelsList.map((model, index) => (
              <p
                key={+index}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {model}{" "}
              </p>
            ))}
          </div>
        </div>
        <Image
          src="images/logo-bmw-rio.svg"
          alt="logo BMW"
          width={92}
          height={92}
        />
      </div>
    </div>
  );
};
