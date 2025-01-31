import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrainingRecordSliceInterface } from "./TrainingRecordSliceInterface";
import { applyGetTrainingRecordsAsync } from "./getTrainingRecordsAsync";

const initialValue: TrainingRecordSliceInterface = {
  records: [],
  requestId: "",
  startDate: "",
  endDate: "",
  fetchStatus: "NOTFETCHED",
};

const trainingRecordSlice = createSlice({
  name: "trainingSlice",
  initialState: initialValue,
  reducers: {
    setCorrectDateForFiltration: (
      state,
      action: PayloadAction<{ start: string; end: string }>
    ) => {
      state.startDate = action.payload.start;
      state.endDate = action.payload.end;
    },
    resetTrainingRecordSlice: (state) => {
      state.endDate = "";
      state.fetchStatus = "NOTFETCHED";
      state.records = [];
      state.requestId = "";
      state.startDate = "";
    },
  },
  extraReducers: (builder) => {
    applyGetTrainingRecordsAsync(builder);
  },
});

export const { setCorrectDateForFiltration, resetTrainingRecordSlice } =
  trainingRecordSlice.actions;

export default trainingRecordSlice.reducer;
