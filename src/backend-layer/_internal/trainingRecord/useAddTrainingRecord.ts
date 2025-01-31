import { useRouter } from "next/navigation";
import { useAppDispatch } from "../store";
import { addTrainingRecordAsync } from "./addTrainingRecordAsync";
import { CreateTrainingRecordDto } from "./trainingRecordService";
import { resetTrainingRecordSlice } from "./trainingRecordSlice";

export const useAddTrainingRecord = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return async (dto: CreateTrainingRecordDto) => {
    await dispatch(addTrainingRecordAsync({ dto })).then(() => {
      dispatch(resetTrainingRecordSlice());
      router.push("/");
    });
  };
};
