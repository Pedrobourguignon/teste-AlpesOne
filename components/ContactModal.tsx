"use client";
import { IFormData } from "@/types/IFormData";
import { useState } from "react";
import "../styles/components/modal.sass";
import { CarIcon } from "./Icons/CarIcon";
import { carsList } from "@/utils/carsList";
import { Spinner, useToast } from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  handleSubmit: (formData: IFormData) => void;
  isFullModal: boolean;
}

export const ContactModal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  handleSubmit,
  isFullModal,
}) => {
  const [formData, setFormData] = useState<IFormData>({
    nome: "",
    email: "",
    telefone: "",
    modelo: "",
    mensagem: "",
    aceitoPolitica: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checkbox.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      handleSubmit(formData);
      toast({
        title: "Cotação solicitada, em breve entraremos em contato",
        position: "top-right",
        status: "success",
      });
    }, 2000);
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        {isFullModal && (
          <span className="close" onClick={closeModal}>
            Minimizar
          </span>
        )}
        <div className="modal-form">
          <div className="modal-header">
            <CarIcon color="#1C69D4" width="28px" height="28px" />
            <p>Solicitar cotação</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                placeholder="Nome"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                placeholder="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Telefone"
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <select
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Modelo
                </option>
                {carsList.map((model, index) => (
                  <option key={+index} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="aceitoPolitica"
                checked={formData.aceitoPolitica}
                onChange={handleChange}
              />
              <p>
                Aceito a <span>Política de Privacidade.</span>
              </p>
            </div>

            <div className="form-group">
              <button type="submit">
                {isSubmitting ? <Spinner /> : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};
