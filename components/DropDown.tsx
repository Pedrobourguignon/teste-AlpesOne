import { useEffect, useRef, Dispatch, SetStateAction, useState } from "react";
import { carsList } from "@/utils/carsList";
import { CarComponent } from "./CarComponent";
import "../styles/components/dropdown.sass";
import Image from "next/image";

interface IDropdown {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dropdown: React.FC<IDropdown> = ({ isOpen, setIsOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return isOpen ? (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-content">
        {carsList.slice(4).map((car, index) => (
          <CarComponent
            isDesktop={false}
            key={+index}
            isFullComponent={false}
            car={car}
            setIsModalOpen={setModalOpen}
          />
        ))}
        <Image
          className="right-arrow"
          src="/icons/seta-a-direita.svg"
          alt="right-arrow"
          width={16}
          height={16}
        />
        <Image
          className="left-arrow"
          src="/icons/seta-a-esquerda.svg"
          alt="left-arrow"
          width={16}
          height={16}
        />
        <div className="carousel">
          <div className="carousel-navigator-selected" />
          <div className="carousel-navigator" />
          <div className="carousel-navigator" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Dropdown;
