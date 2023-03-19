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
import { useSortList } from '../../CustomHooks/useSortList'

interface IToDoList {
    stageState: typeStage[]
    date: Date
}

export const ToDoList: FC<IToDoList> = ({ stageState, date }) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList
    const { searchState } = useContext(SearchContext) as ContextSearch

    const findFilter = useFindFilter()
    const searchFilter = useSearchFilter()
    const sortList = useSortList()

    const allFilterMethods = useCallback((stage: string) => 
        sortList(
            searchFilter(
                findFilter(noteList, stage, date),
                searchState
            )
        )
    , [date, findFilter, noteList, searchFilter, searchState, sortList])

    const fillToDo = useCallback(() => {
        switch (true) {
            case stageState.find(i => i.name === 'Undone')?.state:
                return allFilterMethods('Undone')
            case stageState.find(i => i.name === 'Consummation')?.state:
                return allFilterMethods('Consummation')
            default:
                return []
        }
    }, [stageState, allFilterMethods])

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
