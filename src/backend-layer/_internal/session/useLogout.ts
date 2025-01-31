import { useRouter } from "next/router";
import { GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN } from "../axiosWrapper";
import { useAppDispatch } from "../store";
import { logOut } from "./sessionService";
import { setSessionStatus } from "./sessionSlice";
import { SessionStatusEnum } from "./SessionStateInterface";
import { useResetTrainingRecordSlice } from "../trainingRecord/useResetTrainingRecordSlice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const reset = useResetTrainingRecordSlice();
  return () => {
    logOut()
      .then(() => {
        router.push("/login");
        localStorage.removeItem(GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN);
        dispatch(setSessionStatus(SessionStatusEnum.NotLoggedIn));
      })
      .finally(() => {
        reset();
      });
  };
};
