import Image from "next/image";
import { ICar } from "@/types/ICar";
import "../styles/components/carComponent.sass";
import { Dispatch, SetStateAction } from "react";
import { FacebookIcon } from "./Icons/FacebookIcon";
import { WhatsappIcon } from "./Icons/WhatsappIcon";

interface ICarComponent {
  car: ICar;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isFullComponent: boolean;
  isDesktop: boolean;
}

export const CarComponent: React.FC<ICarComponent> = ({
  car,
  setIsModalOpen,
  isFullComponent,
  isDesktop,
}) => {
  return (
    <div className="car-content">
      <div className="car-info">
        <div className="car-img">
          <Image src={car.picture} alt={car.name} width={276} height={147} />
        </div>
        <p className="car-name">{car.name}</p>
      </div>
      {isFullComponent && (
        <div className="button-container">
          <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
            Cotação
          </button>
          {!isDesktop && <button className="call-btn">Ligar</button>}
        </div>
      )}
      <div className="social-media-container">
        <p>Compartilhe:</p>
        <FacebookIcon color="#666666" width="24px" height="24px" />
        <WhatsappIcon color="#666666" width="24px" height="24px" />
      </div>
    </div>
  );
};
