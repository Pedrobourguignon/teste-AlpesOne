import Image from "next/image";
import "../styles/components/whatsapp.sass";

export const WhatsappButton = () => {
  return (
    <div className="whatsapp-container">
      <Image src="/icons/whatsapp.svg" alt="whatsApp" width={36} height={36} />
    </div>
  );
};
