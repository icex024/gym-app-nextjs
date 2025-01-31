import { useEffect } from "react";
import { useAppDispatch } from "./store";

let initialized = false;

export function useInitStoreOnClientSide() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!initialized) {
      initialized = true;
    }
  }, []);
}
