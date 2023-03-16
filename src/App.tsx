import { useState } from "react";
import { Calendar } from "./Components/Calendar/Calendar";
import { AvailableActionsContext, AvailablePersonsContext, NoteListContext, SearchContext } from "./Context/Context";
import { Header } from "./Components/Header";
import { AddNewTask } from "./Components/NewTask/AddNewTask";
import { PossibleActions, PossibleNoteList, PossiblePersons, PossibleStages } from "./@settings/settings";
import { NewTask } from "./Components/NewTask/NewTask";
import { AvailableActions, noteList, person, typeStage } from "./@types/types";
import { Search } from "./Components/Search/Search";
import { Stages } from "./Components/Stages/Stages";
import { ToDoList } from "./Components/ToDo/ToDoList";

export default function App() {
    const [noteList, setNoteList] = useState<noteList[]>(PossibleNoteList);
    const [stageState, setStageState] = useState<typeStage[]>(PossibleStages)
    const [availableActions, setAvailableActions] = useState<AvailableActions[]>(PossibleActions);
    const [availablePersons, setAvailablePersons] = useState<person[]>(PossiblePersons);
    const [searchState, setSearchState] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()));

    const [calendarModalState, setCalendarModalState] = useState<boolean>(false);
    const [newTaskModalState, setNewTaskModalState] = useState<boolean>(false);
    
    return (
        <NoteListContext.Provider value={{ noteList, setNoteList }}>
            <AvailableActionsContext.Provider value={{ availableActions, setAvailableActions }}>
                <AvailablePersonsContext.Provider value={{ availablePersons, setAvailablePersons }}>
                    <SearchContext.Provider value={{ searchState, setSearchState }}>
                        <div className="App">
                            <Header
                                date={date}
                                setCalendarModalState={setCalendarModalState}
                            />
                            <main className="main">
                                <Search/>
                                <Stages
                                    date={date}
                                    stageState={stageState}
                                    setStageState={setStageState}
                                />
                                <ToDoList
                                    stageState={stageState}
                                    date={date}
                                />
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
                    </SearchContext.Provider>
                </AvailablePersonsContext.Provider>
            </AvailableActionsContext.Provider>
        </NoteListContext.Provider>
    );
}
