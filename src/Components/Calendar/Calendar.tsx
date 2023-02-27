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
  console.log(calendarArray);
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let currentDate = date.getDate();
  let currentHours = date.getHours();
  let currentMins = date.getMinutes();
  let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let countDaysInPreviousMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  const fillRows = (
    date: Date,
    currentDate: number,
    countDaysInMonth: number,
    countDaysInPreviousMonth: number
  ) => {
    let firstDayInMonth = date.getDate() + 6;
    console.log(firstDayInMonth)
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

  const handlerPrevArrowClick = () => {
    currentMonth = currentMonth - 1;
    date = new Date(currentYear, currentMonth, 1);
    //console.log(first)
    let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let countDaysInPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();
    setCalendarArray(
      fillRows(
        date,
        currentDate,
        countDaysInMonth,
        countDaysInPreviousMonth
      )
    );
  };
  const handlerNextArrowClick = () => {
    currentMonth = currentMonth + 1;
    date = new Date(currentYear, currentMonth, 1);
    let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let countDaysInPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();
    setCalendarArray(
      fillRows(
        date,
        currentDate,
        countDaysInMonth,
        countDaysInPreviousMonth
      )
    );
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
        new Date(currentYear, currentMonth, 1),
        currentDate,
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
          <button
            className="calendar__header-button previous"
            onClick={handlerPrevArrowClick}
          >
            <ReactSVG
              src={require("../../Image/arrow-left-icon.svg").default}
            />
          </button>
          <button
            className="calendar__header-button next"
            onClick={handlerNextArrowClick}
          >
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
            <CalendarItem
              key={index}
              item={item}
              setCalendarArray={setCalendarArray}
            />
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
