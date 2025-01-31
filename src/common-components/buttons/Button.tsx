import { ReactNode } from "react";
import { ButtonBase } from "./ButtonBase";

export const Button = ({
  children,
  onClick = () => {},
  href = "#",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) => {
  return (
    <ButtonBase href={href} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};
