import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { useStatusSession } from "../session/useStatusSession";
import { getTrainingRecordsAsync } from "./getTrainingRecordsAsync";
import { selectTrainingRecordRequestId } from "./trainingRecordSelector";

export const useFetchTrainingRecordsIfNeeded = () => {
  const dispatch = useAppDispatch();
  const requestId = useAppSelector(selectTrainingRecordRequestId);
  const session = useStatusSession();

  useEffect(() => {
    if (session === "Ready") {
      console.log(requestId === "");
      if (requestId === "") {
        dispatch(getTrainingRecordsAsync());
      }
    }
  });
};
