import { FC, useContext } from "react"
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
import { priorityEnum } from "../../../types/enums"

interface ButtonsProps {}

export const Buttons: FC<ButtonsProps> = () => {
    const { noteList, setNoteList } = useContext(
        NoteListContext
    ) as ContextNoteList
    const { setProppertyToDo } = useContext(
        PropertyToDoContext
    ) as ContextPropertyToDo

    const { setAvailableActions } = useContext(AvailableActionsContext) as ContextAvailableActions;
    const { setAvailablePersons } = useContext(AvailablePersonsContext) as ContextAvailablePersons;

    const recurringHandle = () => {
        setProppertyToDo({
            name: "",
            description: "",
            priority: priorityEnum.HIGHT,
            invite: [],
            actions: [],
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
    const saveHandle = () => {}

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
