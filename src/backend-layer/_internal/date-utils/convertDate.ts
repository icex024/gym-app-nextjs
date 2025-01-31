import { format, parseISO } from "date-fns";

export function convertDateToLocalDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export function convertLocalDateToDate(date: string): Date {
  return parseISO(date + "T00:00:00Z");
}

export function convertLocalDateTimeToDateWithDotsAndTime(date: string) {
  return format(parseISO(date), "dd.MM.yyyy. HH:mm");
}
