import { Dispatch, SetStateAction } from "react";
import "../styles/components/requestQuote.sass";

interface IQuote {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  text: string;
}

export const RequestQuote: React.FC<IQuote> = ({ setIsModalOpen,text }) => {
  return (
    <div className="request-quote" onClick={() => setIsModalOpen(true)}>
      <div className="request-quote-content">
        <p>{text}</p>
      </div>
    </div>
  );
};
