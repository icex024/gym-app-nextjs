import { SignUpDto } from "@/backend-layer/_internal/session/sessionService";
import { createContext } from "react";

export interface SignUpContextInterface {
  newUser: SignUpDto;
  updateDiff: (value: SignUpDto) => void;
}

export function initialSignUpContext(): SignUpContextInterface {
  return {
    newUser: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    updateDiff: () => {
      /**/
    },
  };
}

export const SignUpContext = createContext(initialSignUpContext());
