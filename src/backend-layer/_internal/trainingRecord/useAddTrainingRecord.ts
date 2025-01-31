import { useAppDispatch } from "../store";
import { addTrainingRecordAsync } from "./addTrainingRecordAsync";
import { CreateTrainingRecordDto } from "./trainingRecordService";

export const useAddTrainingRecord = () => {
  const dispatch = useAppDispatch();

  return async (dto: CreateTrainingRecordDto) => {
    await dispatch(addTrainingRecordAsync({ dto }));
  };
};
