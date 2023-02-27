import React, { FC, useState } from "react";
import { arrayCalendar } from "../../types/types";

interface CalendarItemProps {
  item: arrayCalendar;
  calendarArray: arrayCalendar[];
  setCalendarArray: React.Dispatch<React.SetStateAction<arrayCalendar[]>>;
}

export const CalendarItem: FC<CalendarItemProps> = ({
  item,
  calendarArray,
  setCalendarArray,
}) => {
  const [calendarItemState, setCalendarItemState] = useState<boolean>(false);

  const handlerClick = () => {
    setCalendarArray(prevState => {
      return prevState.map((i: arrayCalendar) => {
        if (i.id === item.id) {
          i.active = !i.active;
        }
        return i;
      });
    });

    //console.log(
    //  calendarArray.map((i) => {
    //    if (i.id === item.id) {
    //      i.active = !i.active;
    //    }
    //    return i;
    //  })
    //);
  };

  return (
    <div
      className={`${item.classes}` + (calendarItemState ? " active" : "")}
      onClick={handlerClick}
    >
      {item.value}
    </div>
  );
};
