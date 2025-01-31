import { useAppSelector } from "../store";
import { selectSessionStatus } from "./sessionSelector";

export const useStatusSession = () => {
  return useAppSelector(selectSessionStatus);
};
