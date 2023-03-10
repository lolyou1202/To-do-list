import { useContext } from "react";
import { placeholderEnum } from "../../../../types/enums";
import {
    ContextPropertyToDo,
    PropertyToDoContext,
} from "../../../../Context/Context";

interface TextareaItemProps {
    atribute: keyof typeof placeholderEnum;
    placeholder: string;
}

export const TextareaItem: React.FC<TextareaItemProps> = ({
    atribute,
    placeholder,
}) => {
    const { propertyToDo, setProppertyToDo } = useContext(
        PropertyToDoContext
    ) as ContextPropertyToDo;

    const handlerTextareaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setProppertyToDo((prev) => ({
            ...prev,
            [atribute]: e.target.value,
        }));

        e.target.style.cssText = "height:auto; padding:0";
        e.target.style.cssText = "height:" + e.target.scrollHeight + "px";
    };

    return (
        <textarea
            className="newTask__mainInfo-textarea"
            placeholder={placeholder}
            rows={1}
            value={propertyToDo[atribute]}
            onChange={handlerTextareaChange}
        ></textarea>
    );
};
