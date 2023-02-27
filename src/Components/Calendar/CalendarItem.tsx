import React, { FC } from "react";
import { arrayCalendar } from "../../types/types";

interface CalendarItemProps {
  item: arrayCalendar;
  setCalendarArray: React.Dispatch<React.SetStateAction<arrayCalendar[]>>;
}

export const CalendarItem: FC<CalendarItemProps> = ({
  item,
  setCalendarArray,
}) => {
  const handlerClick = () => {
    setCalendarArray((prevState) => {
      return prevState.map((i: arrayCalendar) => {
        if (i.id === item.id) {
          i.active = !i.active;
        } else {
          i.active = false;
        }
        return i;
      });
    });
  };

  return (
    <div
      className={`${item.classes}` + (item.active ? " active" : "")}
      onClick={handlerClick}
    >
      {item.value}
    </div>
  );
};
