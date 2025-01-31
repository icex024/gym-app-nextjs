import React, { useState } from "react";
import { format } from "date-fns";
import classNames from "classnames";
import { InputContainer } from "./InputContainer";
import CustomizedCalendar from "@/external-components/Calendar";
import {
  convertDateToLocalDate,
  convertLocalDateToDate,
} from "@/backend-layer/_internal/date-utils/convertDate";

export function LocalDateSelect({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <InputContainer>
      <DatePicker
        className="w-full py-4 px-3 bg-white"
        date={convertLocalDateToDate(value)}
        setDate={(date) => onValueChange(convertDateToLocalDate(date))}
      />
    </InputContainer>
  );
}

interface Props {
  date: Date;
  setDate: (date: Date) => void;
  className?: string;
  classNameCalendar?: string;
  minDate?: Date;
}

export const DatePicker: React.FC<Props> = ({
  date,
  setDate,
  className = "",
  classNameCalendar = "",
  minDate = new Date(1, 1, 2001),
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={classNames("w-full", className)}
        onClick={() => setShow(!show)}
      >
        <div className="flex justify-betweens content-center w-full">
          <div className="grow">{format(date, "d.M.yyyy.")}</div> {">"}
        </div>
      </div>
      <div className="relative z-popup ">
        {show && (
          <div className="absolute mx-auto bg-white bg-opacity-80 w-full flex justify-start">
            <div className={classNames("absolute", classNameCalendar)}>
              <CustomizedCalendar
                minDate={minDate}
                onChange={(value) => {
                  setDate(value as Date);
                  setShow(false);
                }}
                value={date}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
