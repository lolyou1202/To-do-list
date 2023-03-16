import { FC, useCallback, useContext } from 'react'
import { typeStage } from '../../@types/types'
import {
    ContextNoteList,
    ContextSearch,
    NoteListContext,
    SearchContext,
} from '../../Context/Context'
import { NotFoundToDo } from './NotFoundToDo'
import { ToDoItem } from './ToDoItem'
import { useFindFilter } from '../../CustomHooks/useFindFilter'
import { useSearchFilter } from '../../CustomHooks/useSearchFilter'

interface IToDoList {
    stageState: typeStage[]
    date: Date
}

export const ToDoList: FC<IToDoList> = ({ stageState, date }) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList
    const { searchState } = useContext(SearchContext) as ContextSearch

    const findFilter = useFindFilter()
    const searchFilter = useSearchFilter()

    const fillToDo = useCallback(() => {
        switch (true) {
            case stageState.find(i => i.name === 'Undone')?.state:
                return searchFilter(
                    findFilter(noteList, 'Undone', date),
                    searchState
                )
            case stageState.find(i => i.name === 'Consummation')?.state:
                return searchFilter(
                    findFilter(noteList, 'Consummation', date),
                    searchState
                )
            default:
                return []
        }
    }, [stageState, searchFilter, findFilter, searchState, noteList, date])

    return (
        <div className='toDo__list'>
            {fillToDo().length ? (
                fillToDo().map(item => <ToDoItem key={item.id} item={item} />)
            ) : (
                <NotFoundToDo />
            )}
        </div>
    )
}
