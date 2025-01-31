import axios from "axios";
import { refreshToken } from "./session/sessionService";

export const GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN = "GYM_APP_ACCESS_TOKEN_KEY";

const defaultHeaders = {
  accept: "application/json",
  "content-type": "application/json",
};

let axiosInstance = axios.create({
  baseURL: "http://localhost:5294/api/",
  headers: {
    ...defaultHeaders,
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use(async (config) => {
//   const accessToken = localStorage.getItem("GYM_APP_ACCESS_TOKEN_KEY") || "";
//   const decodedToken = jwtDecode(accessToken);

//   if (
//     typeof decodedToken.exp !== "undefined" &&
//     decodedToken.exp < Date.now() / 1000
//   ) {
//     const response = await refreshToken(accessToken); //impl u servisu
//   }

//   return config;
// });

export function setAuthToken(token: string) {
  axiosInstance = axios.create({
    baseURL: "http://localhost:5294/api/",
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log("a");
      if (error.response.status === 401) {
        console.log("inter");
        const accessToken = localStorage.getItem(
          GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN
        );
        await refreshToken(accessToken || "")
          .then((res) => {
            localStorage.setItem(
              GYM_APP_LOCAL_STORAGE_ACCESS_TOKEN,
              res.data.accessToken
            );
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(error);
    }
  );
}

export function getAxios() {
  return axiosInstance;
}
