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
  let date = new Date();

  const [calendarArray, setCalendarArray] = useState<arrayCalendar[]>([]);
  const [currentFirstDayInMonth, setCurrentFirstDayInMonth] = useState<Date>(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );

  //console.log(calendarArray);
  //console.log(currentFirstDayInMonth);
  let currentYear = currentFirstDayInMonth.getFullYear();
  let currentMonth = currentFirstDayInMonth.getMonth();
  let currentDate = currentFirstDayInMonth.getDate();
  let currentHours = currentFirstDayInMonth.getHours();
  let currentMins = currentFirstDayInMonth.getMinutes();
  let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let countDaysInPreviousMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  const fillRows = (
    date: Date,
    countDaysInMonth: number,
    countDaysInPreviousMonth: number
  ) => {
    let firstDayInMonth = date.getDay() + 6;
    if (firstDayInMonth > 6) {
      firstDayInMonth = firstDayInMonth - 7;
    }
    console.log(firstDayInMonth)
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
          
        }
        if (i === firstDayInMonth) {
            nextCount = 1;
          }
        if (i >= firstDayInMonth) {
          if (
            new Date(
              date.getFullYear(),
              date.getMonth(),
              nextCount
            ).getTime() ===
            new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDate()
            ).getTime()
          ) {
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
          if (
            new Date(
              date.getFullYear(),
              date.getMonth(),
              nextCount
            ).getTime() ===
            new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDate()
            ).getTime()
          ) {
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
    setCurrentFirstDayInMonth(
      new Date(
        currentFirstDayInMonth.getFullYear(),
        currentFirstDayInMonth.getMonth() - 1,
        1
      )
    );
    let newDate = new Date(
      currentFirstDayInMonth.getFullYear(),
      currentFirstDayInMonth.getMonth() - 1,
      1
    );
    let countDaysInMonth = new Date(
      currentFirstDayInMonth.getFullYear(),
      currentFirstDayInMonth.getMonth(),
      0
    ).getDate();
    let countDaysInPreviousMonth = new Date(
      currentFirstDayInMonth.getFullYear(),
      currentFirstDayInMonth.getMonth(),
      0
    ).getDate();

    setCalendarArray(
      fillRows(newDate, countDaysInMonth, countDaysInPreviousMonth)
    );
  };
  const handlerNextArrowClick = () => {
    setCurrentFirstDayInMonth(
        new Date(
          currentFirstDayInMonth.getFullYear(),
          currentFirstDayInMonth.getMonth() + 1,
          1
        )
      );
      let newDate = new Date(
        currentFirstDayInMonth.getFullYear(),
        currentFirstDayInMonth.getMonth() + 1,
        1
      );
      let countDaysInMonth = new Date(
        currentFirstDayInMonth.getFullYear(),
        currentFirstDayInMonth.getMonth() + 2,
        0
      ).getDate();
      let countDaysInPreviousMonth = new Date(
        currentFirstDayInMonth.getFullYear(),
        currentFirstDayInMonth.getMonth() + 1,
        0
      ).getDate();
      console.log(new Date(currentFirstDayInMonth.getFullYear(),currentFirstDayInMonth.getMonth() + 1,1),
        newDate, countDaysInMonth, countDaysInPreviousMonth
    )
      setCalendarArray(
        fillRows(newDate, countDaysInMonth, countDaysInPreviousMonth)
      );
  };

  useEffect(() => {
    //setDate([
    //  currentYear,
    //  currentMonth,
    //  currentDate,
    //  currentHours,
    //  currentMins,
    //]);
    setCalendarArray(
      fillRows(
        currentFirstDayInMonth,
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
