import classNames from "classnames";
import { InputContainer } from "./InputContainer";

export const TextInput = ({
  value,
  onValueChange,
  type = "",
  placeholder,
  className = "",
}: {
  value: string;
  onValueChange: (value: string) => void;
  type?: string;
  placeholder: string;
  className?: string;
}) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        type={type}
        className={classNames("w-full py-4 px-3", className)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
