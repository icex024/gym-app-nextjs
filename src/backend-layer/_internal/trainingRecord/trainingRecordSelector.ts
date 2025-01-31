import { AppState } from "../store";

export const selectTrainingRecordFetchStatus = (state: AppState) =>
  state.trainingRecordSlice.fetchStatus;

export const selectTrainingRecordRequestId = (state: AppState) =>
  state.trainingRecordSlice.requestId;
