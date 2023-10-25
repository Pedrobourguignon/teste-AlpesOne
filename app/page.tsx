"use client";
import { RequestQuote } from "@/components/RequestQuote";
import { CarComponent } from "@/components/CarComponent";
import { carsList } from "@/utils/carsList";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { useState } from "react";
import { IFormData } from "@/types/IFormData";
import { Modal } from "@/components/Modal";
import { MobileHeader } from "@/components/Header/MobileHeader";
import { DesktopHeader } from "@/components/Header/DesktopHeader";
import { useMediaQuery } from "@chakra-ui/react";
import { Banners } from "@/components/Banners";
import "../styles/main.sass";

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
        <DesktopHeader />
      ) : (
        <div className="header-fixed">
          <MobileHeader />
          <RequestQuote setIsModalOpen={setIsModalOpen} />
        </div>
      )}
      <Banners />
      <div className="choose-your-bmw">
        <p className="session-title">ESCOLHA SEU BMW</p>
        <div className="car-container">
          {carsList.map((car, index) => (
            <CarComponent
              name={car.name}
              picture={car.picture}
              setIsModalOpen={setIsModalOpen}
              key={+index}
            />
          ))}
        </div>
      </div>
      <Footer />
      <WhatsappButton />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
