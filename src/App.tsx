import { useState } from "react";
import { ReactSVG } from "react-svg";
import { Calendar } from "./Components/Calendar/Calendar";
import {
    AvailableActionsContext,
    AvailablePersonsContext,
    NoteListContext,
} from "./Context/Context";
import { Header } from "./Components/Header";
import { AddNewTask } from "./Components/NewTask/AddNewTask";
import { PossibleActions, PossiblePersons } from "./settings/settings";
import { NewTask } from "./Components/NewTask/NewTask";
import { ToDoItem } from "./Components/ToDoItem";
import { AvailableActions, noteList, person } from "./types/types";

export default function App() {
    const [calendarModalState, setCalendarModalState] = useState<boolean>(false);
    const [newTaskModalState, setNewTaskModalState] = useState<boolean>(false);
    const [noteList, setNoteList] = useState<noteList[]>([
        {
            id: 1,
            name: "Create new project",
            description: "At the conference center",
            priority: "Hight",
            action: "Design project",
            date: [2023, 0, 24, 12, 0],
            invite: [1, 3, 4],
            stage: "Undone",
        },
        {
            id: 2,
            name: "Swiming",
            description: "",
            priority: "Hight",
            action: "Design project",
            date: [2023, 2, 11, 15, 0],
            invite: [1, 2, 4],
            stage: "Consummation",
        },
    ]);
    const [date, setDate] = useState<Date>(new Date());
    const [availableActions, setAvailableActions] = useState<AvailableActions[]>(PossibleActions);
    const [availablePersons, setAvailablePersons] = useState<person[]>(PossiblePersons);

    return (
        <NoteListContext.Provider value={{ noteList, setNoteList }}>
            <AvailableActionsContext.Provider value={{ availableActions, setAvailableActions }}>
                <AvailablePersonsContext.Provider value={{ availablePersons, setAvailablePersons }}>
                    <div className="App">
                        <Header
                            date={date}
                            setCalendarModalState={setCalendarModalState}
                        />
                        <main className="main">
                            <div className="search">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search"
                                />
                                <ReactSVG
                                    className="search-ico"
                                    src={require("./Image/search-ico.svg").default}
                                />
                            </div>
                            <ul className="stages">
                                <li className="stages__item stages__undone active">
                                    <p>Undone</p>
                                </li>
                                <li className="stages__item stages__consummation">
                                    <p>Consummation</p>
                                </li>
                            </ul>
                            <div className="toDo__list">
                                {noteList.map((item) => (
                                    <ToDoItem key={item.id} item={item} />
                                ))}
                            </div>
                        </main>
                        <AddNewTask setModalState={setNewTaskModalState} />
                        <div className="wrapper-modal">
                            <Calendar
                                setDate={setDate}
                                calendarModalState={calendarModalState}
                                setCalendarModalState={setCalendarModalState}
                            />
                            <NewTask
                                newTaskModalState={newTaskModalState}
                                setNewTaskModalState={setNewTaskModalState}
                            />
                        </div>
                    </div>
                </AvailablePersonsContext.Provider>
            </AvailableActionsContext.Provider>
        </NoteListContext.Provider>
    );
}
