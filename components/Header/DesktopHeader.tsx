import Image from "next/image";
import { contactNumber } from "@/utils/contactNumber";
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
  return (
    <div className="desktop-header-container">
      <div className="desktop-content">
        <div className="header-menu">
          <div className="contact-session">
            <button className="phone">
              <div className="phone-content">
                <Image
                  src="/icons/telefone.svg"
                  alt="telefone"
                  width={19}
                  height={19}
                />
                <p>{contactNumber}</p>
              </div>
            </button>
            <button className="virtual-tour">
              <div className="virtual-tour-content">
                <Image src="/icons/360.svg" alt="360" width={19} height={19} />
                <p>TOUR VIRTUAL</p>
              </div>
            </button>
            <button className="whatsapp">
              <div className="whatsapp-content">
                <Image
                  src="/icons/whatsapp.svg"
                  alt="whatsapp"
                  width={19}
                  height={19}
                />
                <p>WHATSAPP</p>
              </div>
            </button>
          </div>
          <div className="models-container">
            {modelsList.map((model, index) => (
              <p key={+index}>{model}</p>
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
