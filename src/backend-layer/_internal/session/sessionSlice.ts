import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SessionStateInterface,
  SessionStatusEnum,
} from "./SessionStateInterface";

const initialState: SessionStateInterface = {
  sessionStatus: SessionStatusEnum.NotStarted,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionStatus: (state, action: PayloadAction<SessionStatusEnum>) => {
      state.sessionStatus = action.payload;
    },
  },
});

export const { setSessionStatus } = sessionSlice.actions;

export default sessionSlice.reducer;
