import { AxiosResponse } from "axios";
import { getAxios } from "../axiosWrapper";

export interface SignUpDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = (dto: SignUpDto) => {
  return getAxios().post("auth/signup", dto);
};

export interface LoginInterface {
  username: string;
  password: string;
}

export const loginService = (
  dto: LoginInterface
): Promise<AxiosResponse<{ accessToken: string }, unknown>> => {
  return getAxios().post("auth/login", dto);
};

export const refreshToken = (
  accessToken: string
): Promise<AxiosResponse<{ accessToken: string }, unknown>> => {
  return getAxios().post("auth/token/refresh", { accessToken });
};

export const logOut = () => {
  return getAxios().post("auth/token/revoke", { data: {} });
};
