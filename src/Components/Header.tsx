import React, { FC, useCallback, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

interface IHeader {
    date: Date;
    setCalendarModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeader> = ({ date, setCalendarModalState }) => {

    const [headerDate, setHeaderDate] = useState<string[]>(['', ''])

    const formatedRelativeToday = useCallback(() => {
        const recentDays = (modifier: number) => {
            const names = [
                "Tomorrow",
                "Today",
                "Yesterday",
            ];
            return names[modifier]
        }
        const underWeek = (modifier: number, count: number) => {
            const names = [
                `After ${count} days`,
                `${count} days ago`
            ];
            return names[modifier]
        }
        const aboutWeek = (modifier: number) => {
            const names = [
                "A week later",
                "Last week"
            ];
            return names[modifier]
        }
        const aboutFewWeek = (modifier: number, count: number) => {
            const names = [
                `In ${count} weeks`,
                `${count} weeks ago`
            ];
            return names[modifier]
        }
        const aboutMonth = (modifier: number) => {
            const names = [
                "In a month",
                "A month ago"
            ];
            return names[modifier]
        }
        const aboutFewMonth = (modifier: number, count: number) => {
            const names = [
                `In ${count} months`,
                `${count} months ago`
            ];
            return names[modifier]
        }
        const aboutYear = (modifier: number) => {
            const names = [
                "In next year",
                "Last year"
            ];
            return names[modifier]
        }
        const aboutFewYear = (modifier: number, count: number) => {
            const names = [
                `After ${count} years`,
                `${count} years ago`
            ];
            return names[modifier]
        }
        const currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

        let matchedDate = ''
        let countDays = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)

        if (countDays === 0) {
            matchedDate = recentDays(1)
        } else if (countDays > 0) {
            if (countDays === 1) {
                matchedDate = recentDays(2)
            } else if (1 < countDays && countDays < 7) {
                matchedDate = underWeek(0, countDays)
            } else if (6 < countDays && countDays < 14) {
                matchedDate = aboutWeek(0)
            } else if (13 < countDays && countDays < 31) {
                matchedDate = aboutFewWeek(0 , Math.floor(countDays / 7))
            } else if (30 < countDays && countDays < 61) {
                matchedDate = aboutMonth(0)
            } else if (60 < countDays && countDays < 366) {
                matchedDate = aboutFewMonth(0, Math.floor(countDays / 30))
            } else if (365 < countDays && countDays < 731) {
                matchedDate = aboutYear(0)
            } else if (730 < countDays && countDays < Infinity) {
                matchedDate = aboutFewYear(0, Math.floor(countDays / 365))
            }            
        } else if (countDays < 0) {
            countDays = Math.abs(countDays)
            if (countDays === 1) {
                matchedDate = recentDays(1)
            } else if (1 < countDays && countDays < 7) {
                matchedDate = underWeek(1, countDays)
            } else if (6 < countDays && countDays < 14) {
                matchedDate = aboutWeek(1)
            } else if (13 < countDays && countDays < 31) {
                matchedDate = aboutFewWeek(1 , Math.floor(countDays / 7))
            } else if (30 < countDays && countDays < 61) {
                matchedDate = aboutMonth(1)
            } else if (60 < countDays && countDays < 366) {
                matchedDate = aboutFewMonth(1, Math.floor(countDays / 30))
            } else if (365 < countDays && countDays < 731) {
                matchedDate = aboutYear(1)
            } else if (730 < countDays && countDays < Infinity) {
                matchedDate = aboutFewYear(1, Math.floor(countDays / 365))
            } 
        }

        return matchedDate
    }, [date])

    const formatedHeaderDate = useCallback(() => {
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const weekNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()
        const week = weekNames[date.getDay()]

        return `${day} ${month} ${year}, ${week}`
    }, [date])

    useEffect(() => 
        setHeaderDate([formatedRelativeToday(), formatedHeaderDate()]),
    [formatedRelativeToday, formatedHeaderDate])
    

    return (
        <header className="header">
            <div>
                <h1 className="day">{headerDate[0]}</h1>
                <p className="date">{headerDate[1]}</p>
            </div>
            <ReactSVG
                className="calendar-ico"
                src={require("../Image/calendar-ico.svg").default}
                onClick={() => setCalendarModalState(true)}
            />
        </header>
    );
};
