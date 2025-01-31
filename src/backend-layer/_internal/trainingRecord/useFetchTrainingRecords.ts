import { useAppDispatch } from "../store";
import { getTrainingRecordsAsync } from "./getTrainingRecordsAsync";

export const useFetchTrainingRecords = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(getTrainingRecordsAsync());
  };
};
