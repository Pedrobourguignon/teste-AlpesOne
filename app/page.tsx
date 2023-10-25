"use client";
import { Header } from "@/components/Header";
import { RequestQuote } from "@/components/RequestQuote";
import { MobileBanner } from "@/components/MobileBanner";
import { CarComponent } from "@/components/CarComponent";
import { carsList } from "@/utils/carsList";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { useState } from "react";
import { IFormData } from "@/types/IFormData";
import { Modal } from "@/components/Modal";
import "../styles/main.sass";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData: IFormData) => {
    // Lógica para lidar com o envio do formulário
    console.log(formData);
    closeModal();
  };
  return (
    <div className="container">
      <div className="header-fixed">
        <Header />
        <RequestQuote setIsModalOpen={setIsModalOpen} />
      </div>
      <MobileBanner />
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
