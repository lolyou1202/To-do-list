import React, { FC, useCallback, useContext } from "react"
import { typeStage } from "../../@types/types";
import { ContextNoteList, NoteListContext } from "../../Context/Context";

interface IStages {
    date: Date
    stageState: typeStage[]
    setStageState: React.Dispatch<React.SetStateAction<typeStage[]>>
}

export const Stages: FC<IStages> = ({ date, stageState, setStageState }) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList;

    const handlerStageClick = (item: typeStage) => {
        const afterClick = [...stageState].map(i => {
            i === item ? i.state = true : i.state = false
            return i
        })
        setStageState(afterClick)
    }

    const markerValue = useCallback(() => 
        noteList.filter(item =>
            item.stage === "Undone" &&
            date.getTime() ===
                new Date(
                    item.date.getFullYear(),
                    item.date.getMonth(),
                    item.date.getDate()
                ).getTime()
        ).length,
    [date, noteList])
    

    return (
        <ul className='stages'>
            {stageState.map(item => (
                <li className={"stages__item stages__undone" + (item.state ? " active" : "")}
                    onClick={() => handlerStageClick(item)}
                    key={item.name}
                >
                    <p>{item.name}</p>
                    {item.name === 'Undone' && markerValue() > 0 &&
                        <div className="stages__marker">
                            {markerValue()}
                        </div>}
                </li>
            ))}
        </ul>
    )
}
