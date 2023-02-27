import React, { FC, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { arrayCalendar } from "../../types/types";
import { CalendarItem } from "./CalendarItem";

interface CalendarProps {
  setDate: (value: number[]) => void;
  calendarModalState: boolean;
  setCalendarModalState: (value: boolean) => void;
}

export const Calendar: FC<CalendarProps> = ({
  setDate,
  calendarModalState,
  setCalendarModalState,
}) => {
  const [calendarArray, setCalendarArray] = useState<arrayCalendar[]>([]);
  console.log(calendarArray)
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  const currentHours = date.getHours();
  const currentMins = date.getMinutes();
  const countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const countDaysInPreviousMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  const fillRows = (
    currentYear: number,
    currentMonth: number,
    countDaysInMonth: number,
    countDaysInPreviousMonth: number
  ) => {
    let firstDayInMonth = new Date(currentYear, currentMonth, 1).getDay() + 6;
    if (firstDayInMonth > 6) {
      firstDayInMonth = firstDayInMonth - 7;
    }
    let fillRows: arrayCalendar[] = Array.from(Array(42), () => ({
      id: 0,
      value: 0,
      classes: "",
      active: false,
    }));

    let nextCount = countDaysInPreviousMonth - firstDayInMonth;

    for (let i = 0; i < 42; i++) {
      if (i < 7) {
        if (i < firstDayInMonth) {
          fillRows[i].id = i;
          fillRows[i].value = nextCount + 1;
          fillRows[i].classes = "notCurrentMonth";
          if (!(i + 1 < firstDayInMonth)) {
            nextCount = 0;
          }
        }
        if (i >= firstDayInMonth) {
          if (nextCount === currentDate) {
            fillRows[i].id = i;
            fillRows[i].value = nextCount;
            fillRows[i].classes = "today";
          } else {
            fillRows[i].id = i;
            fillRows[i].value = nextCount;
          }
        }
        nextCount++;
      }
      if (i >= 7) {
        if (nextCount <= countDaysInMonth) {
          if (nextCount === currentDate) {
            fillRows[i].id = i;
            fillRows[i].value = nextCount;
            fillRows[i].classes = "today";
          } else {
            fillRows[i].id = i;
            fillRows[i].value = nextCount;
          }
        }
        if (nextCount > countDaysInMonth) {
          fillRows[i].id = i;
          fillRows[i].value = nextCount - countDaysInMonth;
          fillRows[i].classes = "notCurrentMonth";
        }
        nextCount++;
      }
    }
    return fillRows;
  };

  useEffect(() => {
    setDate([
      currentYear,
      currentMonth,
      currentDate,
      currentHours,
      currentMins,
    ]);
    setCalendarArray(
      fillRows(
        currentYear,
        currentMonth,
        countDaysInMonth,
        countDaysInPreviousMonth
      )
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"calendar-modal" + (calendarModalState ? " active" : "")}>
      <div className="calendar__header">
        <p className="calendar__header-year">January 2023</p>
        <div className="calendar__header-navigation">
          <button className="calendar__header-button previous">
            <ReactSVG
              src={require("../../Image/arrow-left-icon.svg").default}
            />
          </button>
          <button className="calendar__header-button next">
            <ReactSVG
              src={require("../../Image/arrow-right-icon.svg").default}
            />
          </button>
        </div>
      </div>
      <div className="calendar__main">
        <div className="calendar__main-week">
          <p>mon</p>
          <p>tue</p>
          <p>wed</p>
          <p>thu</p>
          <p>fri</p>
          <p>sat</p>
          <p>sun</p>
        </div>
        <div className="calendar__main-grid">
          {calendarArray.map((item, index) => (
            <CalendarItem key={index} item={item} calendarArray={calendarArray} setCalendarArray={setCalendarArray} />
          ))}
        </div>
      </div>
      <div
        className="navButton calendar"
        onClick={() => setCalendarModalState(false)}
      ></div>
    </div>
  );
};
