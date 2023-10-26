"use client";
import { RequestQuote } from "@/components/RequestQuote";
import { CarComponent } from "@/components/CarComponent";
import { carsList } from "@/utils/carsList";
import { Footer } from "@/components/Footer/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { useState } from "react";
import { IFormData } from "@/types/IFormData";
import { MobileHeader } from "@/components/Header/MobileHeader";
import { DesktopHeader } from "@/components/Header/DesktopHeader";
import { useMediaQuery } from "@chakra-ui/react";
import { Banners } from "@/components/Banners";
import "../styles/main.sass";
import { ContactModal } from "@/components/ContactModal";
import { FlyingFooter } from "@/components/Footer/FlyingFooter";
import { FlyingDesktopHeader } from "@/components/Header/FlyingDesktopHeader";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData: IFormData) => {
    console.log(formData);
    closeModal();
  };
  return (
    <div className="container">
      {isLargerThan768 ? (
        <>
          <DesktopHeader />
          <FlyingDesktopHeader setIsModalOpen={setIsModalOpen} />
        </>
      ) : (
        <div className="header-fixed">
          <MobileHeader />
          <RequestQuote
            setIsModalOpen={setIsModalOpen}
            text="Solicite uma cotação"
          />
        </div>
      )}
      <Banners />
      <div className="choose-your-bmw">
        <p className="session-title">ESCOLHA SEU BMW</p>
        <div className="car-container">
          {carsList.map((car, index) => (
            <CarComponent
              isFullComponent={true}
              isDesktop={isLargerThan768 ? true : false}
              car={car}
              setIsModalOpen={setIsModalOpen}
              key={+index}
            />
          ))}
        </div>
      </div>
      <Footer />
      {isLargerThan768 && <FlyingFooter />}
      <WhatsappButton />
      <ContactModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        isFullModal={true}
      />
    </div>
  );
}
