import { FC, useContext } from "react"
import { typeStage } from "../../@types/types"
import { ContextNoteList, NoteListContext } from "../../Context/Context"
import { ToDoItem } from "./ToDoItem"

interface IToDoList {
    stageState: typeStage[]
    date: Date
}

export const ToDoList: FC<IToDoList> = ({ stageState, date }) => {
    const { noteList } = useContext(NoteListContext) as ContextNoteList

    return (
        <div className='toDo__list'>
            {stageState.find(i => i.name === "Undone")?.state &&
                noteList
                    .filter(item =>
                        item.stage === "Undone" &&
                        date.getTime() ===
                            new Date(
                                item.date.getFullYear(),
                                item.date.getMonth(),
                                item.date.getDate()
                            ).getTime()
                    )
                    .map(item => <ToDoItem key={item.id} item={item} />)
            }
            {stageState.find(i => i.name === "Consummation")?.state &&
                noteList
                    .filter(item => item.stage === "Consummation")
                    .map(item => <ToDoItem key={item.id} item={item} />)
            }
        </div>
    )
}
