import { Dispatch, SetStateAction } from "react";
import "../styles/components/requestQuote.sass";

interface IQuote {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const RequestQuote: React.FC<IQuote> = ({ setIsModalOpen }) => {
  return (
    <div className="request-quote" onClick={() => setIsModalOpen(true)}>
      <div className="request-quote-content">
        <p>Solicite uma cotação</p>
      </div>
    </div>
  );
};
