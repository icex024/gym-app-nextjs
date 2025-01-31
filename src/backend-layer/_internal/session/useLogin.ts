import { useRouter } from "next/router";
import {
  GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN,
  setAuthToken,
} from "../axiosWrapper";
import { useAppDispatch } from "../store";
import { loginService } from "./sessionService";
import { setSessionStatus } from "./sessionSlice";
import { SessionStatusEnum } from "./SessionStateInterface";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (username: string, password: string) => {
    loginService({ username, password })
      .then((res) => {
        localStorage.setItem(
          GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN,
          res.data.accessToken
        );
        setAuthToken(res.data.accessToken);
        dispatch(setSessionStatus(SessionStatusEnum.Ready));
        router.push("/");
      })
      .catch(() => {
        alert("Ooops! Something went wrong.");
      });
  };
};
