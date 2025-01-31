import { createAsyncThunk } from "@reduxjs/toolkit";
import { TrainingRecordDto } from "./TrainingRecordSliceInterface";
import {
  addTrainingRecord,
  CreateTrainingRecordDto,
} from "./trainingRecordService";
import { AppState } from "../store";

export const addTrainingRecordAsync = createAsyncThunk<
  TrainingRecordDto[],
  { dto: CreateTrainingRecordDto },
  { state: AppState }
>("trainingRecord/addTrainingRecordAsync", async ({ dto }) => {
  console.log(dto);
  const response = await addTrainingRecord(dto);

  return response.data;
});
