import React, { FC, useCallback, useContext } from 'react'
import { arrayCalendar } from '../../@types/types'
import { ContextNoteList, NoteListContext } from '../../Context/Context'
import { useFindFilter } from '../../CustomHooks/useFindFilter'

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

    const WiewDaysWithTasks = useFindFilter()

    const handlerClick = () => {
        setCalendarArray(prevState =>
            prevState.map(i => {
                i.id === item.id ? (i.active = !i.active) : (i.active = false)
                return i
            })
        )
        setCalendarModalState(false)
    }

    const WiewTasksInDay = useCallback(
        (priority: string) =>
            WiewDaysWithTasks(noteList, 'Undone', item.date).filter(
                element => element.priority.name === priority
            ).length > 0 && <span className={priority}></span>,
        [WiewDaysWithTasks, item.date, noteList]
    )

    return (
        <div
            className={
                'calendar-day' +
                (item.classes ? ` ${item.classes}` : '') +
                (item.active ? ' active' : '')
            }
            onClick={handlerClick}
        >
            {item.date.getDate()}
            {
                <div className='currentToDo'>
                    {WiewTasksInDay('Hight')}
                    {WiewTasksInDay('Medium')}
                    {WiewTasksInDay('Low')}
                    {WiewTasksInDay('None')}
                </div>
            }
        </div>
    )
}
