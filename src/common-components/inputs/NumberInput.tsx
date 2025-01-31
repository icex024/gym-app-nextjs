import classNames from "classnames";
import { InputContainer } from "./InputContainer";

export const NumberInput = ({
  value,
  onValueChange,
  placeholder,
  className = "",
  minNumber = 0,
  maxNumber = 100000,
}: {
  value: number;
  onValueChange: (value: number) => void;
  type?: string;
  placeholder: string;
  className?: string;
  minNumber?: number;
  maxNumber?: number;
}) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value || "0"))}
        type="number"
        className={classNames("w-full py-4 px-3", className)}
        placeholder={placeholder}
        min={minNumber}
        max={maxNumber}
      />
    </InputContainer>
  );
};
