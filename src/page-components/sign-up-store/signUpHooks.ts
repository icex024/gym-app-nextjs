import { useContext } from "react";
import { SignUpContext } from "./SignUpContext";
import { signUp } from "@/backend-layer/_internal/session/sessionService";
import { useRouter } from "next/router";

export const useSetEmail = (): [string, (value: string) => void] => {
  const context = useContext(SignUpContext);
  return [
    context.newUser.email,
    (email) => context.updateDiff({ ...context.newUser, email }),
  ];
};

export const useSetFirstName = (): [string, (value: string) => void] => {
  const context = useContext(SignUpContext);
  return [
    context.newUser.firstName,
    (firstName) => context.updateDiff({ ...context.newUser, firstName }),
  ];
};

export const useSetLastName = (): [string, (value: string) => void] => {
  const context = useContext(SignUpContext);
  return [
    context.newUser.lastName,
    (lastName) => context.updateDiff({ ...context.newUser, lastName }),
  ];
};

export const useSetPassword = (): [string, (value: string) => void] => {
  const context = useContext(SignUpContext);
  return [
    context.newUser.password,
    (password) => context.updateDiff({ ...context.newUser, password }),
  ];
};

export const useMakeNewUser = () => {
  const context = useContext(SignUpContext);
  const router = useRouter();
  return () => {
    signUp(context.newUser)
      .then(() => router.push("/login"))
      .catch(() => alert("Oops! Something went wrong."));
  };
};
