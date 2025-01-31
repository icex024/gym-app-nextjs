import { useAppSelector } from "../store";

export const useTrainingRecords = () => {
  return useAppSelector((state) => state.trainingRecordSlice.records);
};
