import Link from "next/link";
import { ReactNode } from "react";

export const ButtonBase = ({
  children,
  href,
  onClick = () => {},
}: {
  children: ReactNode;
  onClick?: () => void;
  href: string;
}) => {
  return (
    <button
      className="cursor-pointer select-none bg-white hover:bg-gray-200 border border-black 
        rounded-full py-3 px-4 font-bold font-roboto-condensed w-full max-w-xs"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
