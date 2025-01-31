import classNames from "classnames";
import { InputContainer } from "./InputContainer";
import { ReactNode } from "react";

export const Select = ({
  value,
  onValueChange,
  children,
  className = "",
}: {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <InputContainer>
      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={classNames("w-full py-4 px-3 bg-white", className)}
      >
        {children}
      </select>
    </InputContainer>
  );
};
