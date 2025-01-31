import { ReactNode } from "react";

export const InputContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-roboto text-sm leading-4 text-black border">
      {children}
    </div>
  );
};
