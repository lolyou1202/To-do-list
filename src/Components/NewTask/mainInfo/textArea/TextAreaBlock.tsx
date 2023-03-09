import { FC, useContext } from "react";
import { placeholderEnum } from "../../../../types/enums";
import { ContextPropertyToDo, PropertyToDoContext } from "../../../Context";
import { TextareaItem } from "./TextareaItem";

interface TextAreaBlockProps {
    atribute: keyof typeof placeholderEnum;
    placeholder: string
}

export const TextAreaBlock: FC<TextAreaBlockProps> = ({ atribute, placeholder }) => {
    const { propertyToDo } = useContext(PropertyToDoContext) as ContextPropertyToDo;

    return (
        <div className={"newTask__mainInfo-block" + (propertyToDo[atribute] ? "" : " cursor")}>
            <TextareaItem
                atribute={atribute}
                placeholder={placeholder}
            />
        </div>
    );
};
