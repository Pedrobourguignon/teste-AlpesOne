import Image from "next/image";
import { ICar } from "@/types/ICar";
import "../styles/components/carComponent.sass";
import { Dispatch, SetStateAction } from "react";

interface ICarComponent {
  car: ICar;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isFullComponent: boolean;
}

export const CarComponent: React.FC<ICarComponent> = ({
  car,
  setIsModalOpen,
  isFullComponent,
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
          <button className="call-btn">Ligar</button>
        </div>
      )}
      <div className="social-media-container">
        <p>Compartilhe:</p>
        <Image
          src="/icons/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          src="/icons/whatsapp.svg"
          alt="facebook"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
