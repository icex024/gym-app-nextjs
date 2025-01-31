import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sessionSlice from "./session/sessionSlice";
import trainingRecordSlice from "./trainingRecord/trainingRecordSlice";

function makeStore() {
  return configureStore({
    reducer: {
      session: sessionSlice,
      trainingRecordSlice: trainingRecordSlice,
    },
  });
}

let store: ReturnType<typeof makeStore>;

const initializeStore = () => {
  const _store = store ?? makeStore();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

export function clearStore() {
  store = makeStore();
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
