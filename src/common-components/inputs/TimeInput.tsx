import classNames from "classnames";
import { InputContainer } from "./InputContainer";

export const TimeInput = ({
  value,
  onValueChange,
  placeholder,
  className = "",
}: {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  className?: string;
}) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={classNames("w-full py-4 px-3", className)}
        placeholder={placeholder}
        pattern="(0?[1-9]|1[012]):[0-5][0-9]"
      />
    </InputContainer>
  );
};
