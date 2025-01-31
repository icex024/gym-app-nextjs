import { useState } from "react";
import {
  convertDateToLocalDate,
  convertLocalDateToDate,
} from "../date-utils/convertDate";
import { nextSunday, previousMonday } from "date-fns";
import { useAppDispatch } from "../store";
import { setCorrectDateForFiltration } from "./trainingRecordSlice";

export const useSetCorrectDatesForFilter = (): [
  string,
  (value: string) => void
] => {
  const [dateInPicker, setDateInPicker] = useState(
    convertDateToLocalDate(new Date())
  );
  const dispatch = useAppDispatch();

  return [
    dateInPicker,
    (value: string) => {
      const dateObj = convertLocalDateToDate(value);
      let monday;
      let sunday;
      if (dateObj.getDay() === 1) {
        monday = dateObj;
      } else {
        monday = previousMonday(dateObj);
      }
      if (dateObj.getDay() === 0) {
        sunday = dateObj;
      } else {
        sunday = nextSunday(dateObj);
      }

      dispatch(
        setCorrectDateForFiltration({
          start: convertDateToLocalDate(monday),
          end: convertDateToLocalDate(sunday),
        })
      );
      setDateInPicker(value);
    },
  ];
};
