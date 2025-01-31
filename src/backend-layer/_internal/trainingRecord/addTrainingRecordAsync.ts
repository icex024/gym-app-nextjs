import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import {
  TrainingRecordDto,
  TrainingRecordSliceInterface,
} from "./TrainingRecordSliceInterface";
import {
  addTrainingRecord,
  CreateTrainingRecordDto,
} from "./trainingRecordService";
import { AppState } from "../store";

export const addTrainingRecordAsync = createAsyncThunk<
  TrainingRecordDto[],
  { dto: CreateTrainingRecordDto },
  { state: AppState }
>("trainingRecord/addTrainingRecordAsync", async ({ dto }, thunkApi) => {
  console.log(dto);
  const response = await addTrainingRecord(
    dto,
    thunkApi.getState().trainingRecordSlice.startDate,
    thunkApi.getState().trainingRecordSlice.endDate
  );

  return response.data;
});

export const applyAddTrainingRecordAsync = (
  builder: ActionReducerMapBuilder<TrainingRecordSliceInterface>
) => {
  builder.addCase(addTrainingRecordAsync.fulfilled, (state, action) => {
    state.records = action.payload;
  });
};
