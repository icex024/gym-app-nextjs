import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { useStatusSession } from "./useStatusSession";
import { SessionStatusEnum } from "./SessionStateInterface";
import {
  GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN,
  setAuthToken,
} from "../axiosWrapper";
import { setSessionStatus } from "./sessionSlice";
import { useRouter } from "next/router";

export const useSessionIfNotStarted = () => {
  const sessionStatus = useStatusSession();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === SessionStatusEnum.NotStarted) {
      const token = localStorage.getItem(GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN);
      if (token) {
        setAuthToken(
          localStorage.getItem(GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN) || ""
        );
        dispatch(setSessionStatus(SessionStatusEnum.Ready));
      } else {
        dispatch(setSessionStatus(SessionStatusEnum.NotLoggedIn));
        router.push("/login");
      }
    }
  }, [sessionStatus, dispatch, router]);
};
