import React, { FC, useContext } from "react"
import {
    AvailableActionsContext,
    AvailablePersonsContext,
    ContextAvailableActions,
    ContextAvailablePersons,
    ContextNoteList,
    ContextPropertyToDo,
    NoteListContext,
    PropertyToDoContext,
} from "../../../Context/Context"
import { priorityEnum } from "../../../@types/enums"

interface IButtons {
    setNewTaskModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Buttons: FC<IButtons> = ({ setNewTaskModalState }) => {
    const { noteList, setNoteList } = useContext(NoteListContext) as ContextNoteList
    const { propertyToDo, setProppertyToDo } = useContext(PropertyToDoContext) as ContextPropertyToDo

    const { setAvailableActions } = useContext(AvailableActionsContext) as ContextAvailableActions;
    const { setAvailablePersons } = useContext(AvailablePersonsContext) as ContextAvailablePersons;

    const recurringHandle = () => {
        setProppertyToDo({
            name: "",
            description: "",
            priority: priorityEnum.HIGHT,
            invite: [],
            action: null,
            time: new Date(),
        })
        setAvailableActions(prev => (
            [...prev].map(item => {
                item.picked = false
                return item
            })
        ))
        setAvailablePersons(prev => (
            [...prev].map(item => {
                item.picked = false
                return item
            })
        ))
    }
    const saveHandle = () => {
        if (propertyToDo.name && propertyToDo.description && propertyToDo.action) {
            const action = propertyToDo.action
            setNoteList(prev => ([
                ...prev,
                {
                    id: noteList.length + 1,
                    name: propertyToDo.name,
                    description: propertyToDo.description,
                    priority: propertyToDo.priority,
                    action: action,
                    date: propertyToDo.time,
                    invite: propertyToDo.invite,
                    stage: "Undone",
                },
            ]))
            recurringHandle()
            setNewTaskModalState(false)
        }
    }

    return (
        <div className='newTask__buttons-block'>
            <button className='newTask__buttons recurring' onClick={recurringHandle}>
                Recurring
            </button>
            <button className='newTask__buttons save' onClick={saveHandle}>
                Save
            </button>
        </div>
    )
}
