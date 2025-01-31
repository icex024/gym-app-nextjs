import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import {
  TrainingRecordDto,
  TrainingRecordSliceInterface,
} from "./TrainingRecordSliceInterface";
import { AppState } from "../store";
import { getTrainingRecords } from "./trainingRecordService";

export const getTrainingRecordsAsync = createAsyncThunk<
  TrainingRecordDto[],
  void,
  { state: AppState }
>("trainingRecord/getTrainingRecordAsync", async (undefined, thunkApi) => {
  const inProgressRequestId = thunkApi.getState().trainingRecordSlice.requestId;

  if (inProgressRequestId !== thunkApi.requestId) {
    throw Error();
  }

  const response = await getTrainingRecords(
    thunkApi.getState().trainingRecordSlice.startDate,
    thunkApi.getState().trainingRecordSlice.endDate
  );

  return response.data;
});

export const applyGetTrainingRecordsAsync = (
  builder: ActionReducerMapBuilder<TrainingRecordSliceInterface>
) => {
  builder.addCase(getTrainingRecordsAsync.pending, (state, action) => {
    state.fetchStatus = "PENDING";
    if (state.requestId === "") {
      state.requestId = action.meta.requestId;
    }
  });
  builder.addCase(getTrainingRecordsAsync.fulfilled, (state, action) => {
    state.fetchStatus = "FULFILLED";
    state.records = action.payload;
    state.requestId = "FETCHED";
  });
  builder.addCase(getTrainingRecordsAsync.rejected, (state, action) => {
    state.fetchStatus = "NEEDSREFETCH";
    if (state.requestId !== action.meta.requestId) {
      state.requestId = "";
    }
  });
};
