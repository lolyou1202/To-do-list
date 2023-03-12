import { FC } from "react";
import { atributeToDoEnum, placeholderEnum } from "../../../@types/enums";
import { ActionsList } from "./actions/ActionsList";
import { TextAreaBlock } from "./textArea/TextAreaBlock";

export const MainInfo: FC = () => {
    return (
        <div className="newTask__block newTask__mainInfo">
            <TextAreaBlock
                atribute={atributeToDoEnum.name}
                placeholder={placeholderEnum.name}
            />
            <ActionsList />
            <TextAreaBlock
                atribute={atributeToDoEnum.description}
                placeholder={placeholderEnum.description}
            />
        </div>
    );
};