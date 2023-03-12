import React, { FC, useCallback, useContext } from "react"
import { arrayCalendar } from "../../@types/types"
import { ContextNoteList, NoteListContext } from "../../Context/Context"

interface ICalendarItem {
    item: arrayCalendar
    setCalendarArray: React.Dispatch<React.SetStateAction<arrayCalendar[]>>
    setCalendarModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CalendarItem: FC<ICalendarItem> = ({
    item,
    setCalendarArray,
    setCalendarModalState,
}) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList

    const handlerClick = () => {
        setCalendarArray((prevState) =>
            prevState.map(i => {
                i.id === item.id ? (i.active = !i.active) : (i.active = false)
                return i
            })
        )
        setCalendarModalState(false)
    }

    const WiewDaysWithTasks = useCallback(() =>
        noteList.filter(i =>
            new Date(
                i.date.getFullYear(),
                i.date.getMonth(),
                i.date.getDate()
            ).getTime() === item.date.getTime()
        ),
    [noteList, item]
    )

    const WiewTasksInDay = useCallback((priority: string) =>
        WiewDaysWithTasks().filter((element) => 
            element.priority === priority
        ).length > 0 && <span className={priority}></span>,
    [WiewDaysWithTasks]
    )

    return (
        <div
            className={
                "calendar-day" +
                (item.classes ? ` ${item.classes}` : "") +
                (item.active ? " active" : "")
            }
            onClick={handlerClick}
        >
            {item.date.getDate()}
            {WiewDaysWithTasks().length > 0 && (
                <div className='currentToDo'>
                    {WiewTasksInDay("Hight")}
                    {WiewTasksInDay("Medium")}
                    {WiewTasksInDay("Low")}
                    {WiewTasksInDay("None")}
                </div>
            )}
        </div>
    )
}
