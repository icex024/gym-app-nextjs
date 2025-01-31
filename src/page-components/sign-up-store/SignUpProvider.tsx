import { SignUpDto } from "@/backend-layer/_internal/session/sessionService";
import { ReactNode, useReducer } from "react";
import {
  initialSignUpContext,
  SignUpContext,
  SignUpContextInterface,
} from "./SignUpContext";

const setSignUpState = (state: SignUpDto, action: SignUpDto) => {
  state = { ...action };
  return state;
};

export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [userState, dispatchUser] = useReducer(
    setSignUpState,
    initialSignUpContext().newUser
  );

  const value: SignUpContextInterface = {
    newUser: userState,
    updateDiff: (value) => dispatchUser({ ...userState, ...value }),
  };

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
};

export function withSignUpProvider<P extends object>(
  Component: React.ComponentType<P>
) {
  const WithSignUpProvider = (props: P) => (
    <SignUpProvider>
      <Component {...props} />
    </SignUpProvider>
  );
  return WithSignUpProvider;
}
