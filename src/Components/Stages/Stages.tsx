import React, { FC, useCallback, useContext } from 'react'
import { typeStage } from '../../@types/types'
import {
    ContextNoteList,
    ContextSearch,
    NoteListContext,
    SearchContext,
} from '../../Context/Context'
import { useFindFilter } from '../../CustomHooks/useFindFilter'
import { useSearchFilter } from '../../CustomHooks/useSearchFilter'

interface IStages {
    date: Date
    stageState: typeStage[]
    setStageState: React.Dispatch<React.SetStateAction<typeStage[]>>
}

export const Stages: FC<IStages> = ({ date, stageState, setStageState }) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList
    const { searchState } = useContext(SearchContext) as ContextSearch

    const findFilter = useFindFilter()
    const searchFilter = useSearchFilter()

    const handlerStageClick = (item: typeStage) => {
        const afterClick = [...stageState].map(i => {
            i === item ? (i.state = true) : (i.state = false)
            return i
        })
        setStageState(afterClick)
    }

    const markerValue = useCallback(() =>
            searchFilter(findFilter(noteList, 'Undone', date), searchState)
                .length,
        [date, findFilter, searchFilter, searchState, noteList]
    )

    return (
        <ul className='stages'>
            {stageState.map(item => (
                <li
                    className={
                        'stages__item' +
                        (item.state ? ' active' : '')
                    }
                    onClick={() => handlerStageClick(item)}
                    key={item.name}
                >
                    <p>{item.name}</p>
                    {item.name === 'Undone' && markerValue() > 0 && (
                        <div className='stages__marker'>{markerValue()}</div>
                    )}
                </li>
            ))}
        </ul>
    )
}
