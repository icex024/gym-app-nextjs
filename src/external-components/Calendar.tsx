import Calendar, { CalendarProps } from "react-calendar";

const monthNames = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];

const dayNames = ["NED", "PON", "UTO", "SRE", "ČET", "PET", "SUB", "NED"];

export default function CustomizedCalendar(props: CalendarProps) {
  return (
    <Calendar
      minDetail="year"
      showNeighboringMonth={true}
      showNavigation={true}
      formatDay={(locale, date) => date.getDate().toString()}
      formatMonth={(locale, date) => monthNames[date.getMonth()]}
      formatMonthYear={(locale, date) =>
        `${monthNames[date.getMonth()]} ${date.getFullYear()}`
      }
      formatShortWeekday={(locale, date) => dayNames[date.getDay()]}
      next2Label={<>{">>"}</>}
      prev2Label={<>{"<<"}</>}
      nextLabel={<>{">"}</>}
      prevLabel={<>{"<"}</>}
      {...props}
    />
  );
}
