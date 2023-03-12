import { FC, useCallback, useContext, useEffect, useState } from "react";
import { modalContentObj, selectedDateObj, selectsTimeState } from "../../../@types/types";
import { ContextPropertyToDo, PropertyToDoContext } from "../../../Context/Context";

export const Time: FC = () => {
    const { setProppertyToDo } = useContext(PropertyToDoContext) as ContextPropertyToDo;

    const [modalState, setModalState] = useState<selectsTimeState>({
        year: false,
        month: false,
        day: false,
        hour: false,
        minutes: false,
    });
    const [modalContent, setModalContent] = useState<modalContentObj>({
        year: [],
        month: [],
        day: [],
        hour: [],
        minutes: [],
    });
    const [selectedDate, setSelectedDate] = useState<selectedDateObj>({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        hour: 0,
        minutes: 0,
    });

    const generateYears = () => {
        const countWiew = 7;
        const year = new Date().getFullYear();
        let result = [];
        for (let i = 0; i < countWiew; i++) {
            result.push(year + i);
        }
        return result;
    };
    const generateMonths = () => {
        const namesMonths = [
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
        let result = [];
        for (let i = 0; i < 12; i++) {
            result.push(namesMonths[i]);
        }
        return result;
    };
    const generateDays = () => {
        const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        let result = [];
        for (let i = 0; i < date; i++) {
            result.push(i + 1);
        }
        return result;
    };
    const generateHours = () => {
        let result = [];
        for (let i = 0; i < 24; i++) {
            if (i < 10) {
                result.push("0" + i);
            }
            if (i > 9 && i < 20) {
                result.push("1" + (i - 10));
            }
            if (i > 19) {
                result.push("2" + (i - 20));
            }
        }
        return result;
    };
    const generateMinutes = () => {
        let result = [];
        for (let i = 0; i < 60; i++) {
            if (i < 10) {
                result.push("0" + i);
            }
            if (i > 9 && i < 20) {
                result.push("1" + (i - 10));
            }
            if (i > 19 && i < 30) {
                result.push("2" + (i - 20));
            }
            if (i > 29 && i < 40) {
                result.push("3" + (i - 30));
            }
            if (i > 39 && i < 50) {
                result.push("4" + (i - 40));
            }
            if (i > 49 && i < 60) {
                result.push("5" + (i - 50));
            }
        }
        return result;
    };

    const generateСorrectMonth = useCallback(() => {
        const namesMonths = [
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
        return namesMonths[selectedDate.month];
    }, [selectedDate]);

    const generateСorrectTime = useCallback(
        (atribute: keyof typeof selectedDate) => selectedDate[atribute] < 10
            ? "0" + selectedDate[atribute]
            : Number(selectedDate[atribute]),
        [selectedDate]
    );

    const wiewModalHandler = (value: string) => {
        const state = { ...modalState };

        let key: keyof typeof state;
        for (key in state) {
            key === value ? (state[key] = !state[key]) : (state[key] = false);
        }
        setModalState(state);
    };

    const selectItemHandler = (item: string | number, index: number, atribute: string) => {
        switch (atribute) {
            case "year": case "day":
                setSelectedDate(prev => ({
                    ...prev,
                    [atribute]: Number(item)
                }));
                break;
            case "month":
                if (atribute === "month") {
                    setSelectedDate(prev => ({
                        ...prev,
                        [atribute]: index
                    }));
                }
                break;
            case "hour": case "minutes":
                if (String(item)[0] === "0") {
                    setSelectedDate(prev => ({
                        ...prev,
                        [atribute]: Number(String(item)[1])
                    }));
                } else {
                    setSelectedDate(prev => ({
                        ...prev,
                        [atribute]: Number(item)
                    }));
                }
                break;
        }

        setModalState({
            year: false,
            month: false,
            day: false,
            hour: false,
            minutes: false,
        });
    };

    useEffect(() => {
        setProppertyToDo(prev => ({
            ...prev,
            time: new Date(
                selectedDate.year,
                selectedDate.month,
                selectedDate.day,
                selectedDate.hour,
                selectedDate.minutes
            ),
        }));
    }, [selectedDate, setProppertyToDo]);

    useEffect(() => {
        setModalContent({
            year: generateYears(),
            month: generateMonths(),
            day: generateDays(),
            hour: generateHours(),
            minutes: generateMinutes(),
        });
    }, []);

    return (
        <div className="newTask__block newTask__time">
            <p>Time</p>
            <ul className="newTask__time-list">
                <li className="selectTime__item">
                    <button
                        className="selectTime__item-button"
                        onClick={() => wiewModalHandler("year")}
                    >
                        {selectedDate.year}
                    </button>
                    <div className={"selectTime__item-modal" + (modalState.year ? " active" : "")}>
                        {modalContent.year.map((item, index) => (
                            <p
                                key={index}
                                onClick={() => selectItemHandler(item, index, "year")}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </li>
                <li className="selectTime__item">
                    <button
                        className="selectTime__item-button large"
                        onClick={() => wiewModalHandler("month")}
                    >
                        {generateСorrectMonth()}
                    </button>
                    <div className={"selectTime__item-modal" + (modalState.month ? " active" : "")}>
                        {modalContent.month.map((item, index) => (
                            <p
                                key={index}
                                onClick={() => selectItemHandler(item, index, "month")}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </li>
                <li className="selectTime__item">
                    <button
                        className="selectTime__item-button small"
                        onClick={() => wiewModalHandler("day")}
                    >
                        {selectedDate.day}
                    </button>
                    <div className={"selectTime__item-modal" + (modalState.day ? " active" : "")}>
                        {modalContent.day.map((item, index) => (
                            <p
                                key={index}
                                onClick={() => selectItemHandler(item, index, "day")}>
                                {item}
                            </p>
                        ))}
                    </div>
                </li>
                <li className="selectTime__item">
                    <div className="selectTime__item-hourBlock medium">
                        <div className="selectTime__item-hour">
                            <button onClick={() => wiewModalHandler("hour")}>
                                {generateСorrectTime("hour")}
                            </button>
                            <div className={"selectTime__item-modal" + (modalState.hour ? " active" : "")}>
                                {modalContent.hour.map((item, index) => (
                                    <p
                                        key={index}
                                        onClick={() => selectItemHandler(item, index, "hour")}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <p className="colon">:</p>
                        <div className="selectTime__item-minutes">
                            <button onClick={() => wiewModalHandler("minutes")}>
                                {generateСorrectTime("minutes")}
                            </button>
                            <div className={"selectTime__item-modal" + (modalState.minutes ? " active" : "")}>
                                {modalContent.minutes.map((item, index) => (
                                    <p
                                        key={index}
                                        onClick={() => selectItemHandler(item, index, "minutes")}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
