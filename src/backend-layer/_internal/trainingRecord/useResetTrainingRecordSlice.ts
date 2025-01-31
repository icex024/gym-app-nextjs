import { useAppDispatch } from "../store";
import { resetTrainingRecordSlice } from "./trainingRecordSlice";

export const useResetTrainingRecordSlice = () => {
  const dispatch = useAppDispatch();
  return () => {
    console.log("reste");
    dispatch(resetTrainingRecordSlice());
  };
};
