import Image from "next/image";
import "../../styles/components/flyingDesktopHeader.sass";
import { RequestQuote } from "../RequestQuote";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IFlyingHeader {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const FlyingDesktopHeader: React.FC<IFlyingHeader> = ({
  setIsModalOpen,
}) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 630) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return showHeader ? (
    <div className="flying-header">
      <div className="flying-header-content">
        <Image
          src="/images/logo-bmw-rio.svg"
          alt="logo BMW"
          width={40}
          height={40}
        />
        <RequestQuote
          setIsModalOpen={setIsModalOpen}
          text="Solicitar cotação"
        />
      </div>
    </div>
  ) : null;
};
