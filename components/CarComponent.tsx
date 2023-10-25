import Image from "next/image";
import { ICar } from "@/types/ICar";
import "../styles/components/carComponent.sass";

export const CarComponent: React.FC<ICar> = ({
  name,
  picture,
  setIsModalOpen,
}) => {
  return (
    <div className="car-content">
      <div className="car-info">
        <div className="car-img">
          <Image src={picture} alt={name} width={276} height={147} />
        </div>
        <p className="car-name">{name}</p>
      </div>
      <div className="button-container">
        <button className="quote-btn" onClick={() => setIsModalOpen(true)}>
          Cotação
        </button>
        <button className="call-btn">Ligar</button>
      </div>
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
