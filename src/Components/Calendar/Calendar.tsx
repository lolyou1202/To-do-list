import { FC, useCallback, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { arrayCalendar } from "../../@types/types";
import { CalendarItem } from "./CalendarItem";

interface ICalendar {
    setDate: React.Dispatch<React.SetStateAction<Date>>
    calendarModalState: boolean;
    setCalendarModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Calendar: FC<ICalendar> = ({ setDate, calendarModalState, setCalendarModalState }) => {
    let date = new Date();

    const [calendarArray, setCalendarArray] = useState<arrayCalendar[]>([]);
    const [headerContent, setHeaderContent] = useState<string>("");
    const [currentFirstDayInMonth, setCurrentFirstDayInMonth] = useState<Date>(
        new Date(date.getFullYear(), date.getMonth(), 1)
    );

    const fillRows = (
        date: Date,
        countDaysInMonth: number,
        countDaysInPreviousMonth: number
    ) => {
        let firstDayInMonth = date.getDay() + 6;
        if (firstDayInMonth > 6) {
            firstDayInMonth = firstDayInMonth - 7;
        }
        let fillRows: arrayCalendar[] = Array.from(Array(42), () => ({
            id: 0,
            date: new Date(),
            classes: "",
            active: false,
        }));

        let nextCount = countDaysInPreviousMonth - firstDayInMonth;

        for (let i = 0; i < 42; i++) {
            if (i < 7) {
                if (i < firstDayInMonth) {
                    fillRows[i].id = i;
                    fillRows[i].date = new Date(
                        date.getFullYear(),
                        date.getMonth() - 1,
                        nextCount + 1
                    );
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
                        fillRows[i].date = new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            nextCount
                        );
                        fillRows[i].classes = "today";
                    } else {
                        fillRows[i].id = i;
                        fillRows[i].date = new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            nextCount
                        );
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
                        fillRows[i].date = new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            nextCount
                        );
                        fillRows[i].classes = "today";
                    } else {
                        fillRows[i].id = i;
                        fillRows[i].date = new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            nextCount
                        );
                    }
                }
                if (nextCount > countDaysInMonth) {
                    fillRows[i].id = i;
                    fillRows[i].date = new Date(
                        date.getFullYear(),
                        date.getMonth() + 1,
                        nextCount - countDaysInMonth
                    );
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
        setHeaderContent(
            getHeaderContent(
                new Date(
                    currentFirstDayInMonth.getFullYear(),
                    currentFirstDayInMonth.getMonth() - 1,
                    1
                )
            )
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

        setCalendarArray(
            fillRows(newDate, countDaysInMonth, countDaysInPreviousMonth)
        );
        setHeaderContent(
            getHeaderContent(
                new Date(
                    currentFirstDayInMonth.getFullYear(),
                    currentFirstDayInMonth.getMonth() + 1,
                    1
                )
            )
        );
    };

    const getHeaderContent = (array: Date) => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const calendarString = `${
            monthNames[array.getMonth()]
        } ${array.getFullYear()}`;
        return calendarString;
    };
    const setDateChosenDay = useCallback(
      () => {
        let activeDate = null;
        calendarArray.forEach((element) => {
            if (element.active) {
                activeDate = element.date
            }
        })
        if (!activeDate) {
            activeDate = new Date(new Date().getFullYear(), new Date().getUTCMonth(), new Date().getDate())
        }
        setDate(activeDate);
      },
      [setDate, calendarArray],
    )

    useEffect(() => {
        setDateChosenDay()
    }, [setDateChosenDay])
    
    useEffect(() => {
        setCalendarArray(
            fillRows(
                currentFirstDayInMonth,
                new Date(
                    currentFirstDayInMonth.getFullYear(),
                    currentFirstDayInMonth.getMonth() + 1,
                    0
                ).getDate(),
                new Date(
                    currentFirstDayInMonth.getFullYear(),
                    currentFirstDayInMonth.getMonth(),
                    0
                ).getDate()
            )
        );
        setHeaderContent(
            getHeaderContent(
                new Date(
                    currentFirstDayInMonth.getFullYear(),
                    currentFirstDayInMonth.getMonth(),
                    1
                )
            )
        );
        // eslint-disable-next-line
    }, []);

    return (
        <div className={"calendar-modal" + (calendarModalState ? " active" : "")}>
            <div className="calendar__header">
                <p className="calendar__header-year">{headerContent}</p>
                <div className="calendar__header-navigation">
                    <button
                        className="calendar__header-button previous"
                        onClick={handlerPrevArrowClick}
                    >
                        <ReactSVG
                            src={
                                require("../../Image/arrow-left-icon.svg")
                                    .default
                            }
                        />
                    </button>
                    <button
                        className="calendar__header-button next"
                        onClick={handlerNextArrowClick}
                    >
                        <ReactSVG
                            src={
                                require("../../Image/arrow-right-icon.svg")
                                    .default
                            }
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
                    {calendarArray.map((item, index) => 
                        <CalendarItem
                            key={index}
                            item={item}
                            setCalendarArray={setCalendarArray}
                            setCalendarModalState={setCalendarModalState}
                        />
                    )}
                </div>
            </div>
            <div
                className="navButton calendar"
                onClick={() => setCalendarModalState(false)}
            ></div>
        </div>
    );
};
