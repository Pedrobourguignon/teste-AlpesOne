import { Dispatch, SetStateAction } from "react";
export interface ICar {
  name: string;
  picture: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
