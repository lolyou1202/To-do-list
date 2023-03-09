import { FC, useContext } from "react";
import { ContextNoteList, ContextPropertyToDo, NoteListContext, PropertyToDoContext } from "../../Context";

interface ButtonsProps {}

export const Buttons: FC<ButtonsProps> = () => {
    const {noteList, setNoteList} = useContext(NoteListContext) as ContextNoteList;
    const { propertyToDo, setProppertyToDo } = useContext(PropertyToDoContext) as ContextPropertyToDo;

    const recurringHandle = () => {

    }
    const saveHandle = () => {
        //setNoteList(prev => ([...prev, propertyToDo]))
    }

    return (
        <div className="newTask__buttons-block">
            <button className="newTask__buttons recurring" onClick={recurringHandle}>Recurring</button>
            <button className="newTask__buttons save" onClick={saveHandle}>Save</button>
        </div>
    );
};
