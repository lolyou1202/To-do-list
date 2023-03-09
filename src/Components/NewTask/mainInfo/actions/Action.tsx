import { useContext } from "react";
import { ReactSVG } from "react-svg";
import { AvailableActions } from "../../../../types/types";
import { AvailableActionsContext, ContextAvailableActions } from "../../../Context";

interface ActionProps {
    item: AvailableActions;
}

export const Action: React.FC<ActionProps> = ({ item }) => {
    const { availableActions, setAvailableActions } = useContext(AvailableActionsContext) as ContextAvailableActions;

    const actionClickHandler = () => {
        const addPickedAction = [...availableActions].map((i) => {
            if (i.id === item.id) {
                i.picked = !i.picked;
            } else {
                i.picked = false;
            }
            return i;
        });
        setAvailableActions(addPickedAction);
    };

    const closeActionClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();

        const newActionList = [...availableActions].filter((i) => {
            if (i.id === item.id) {
                return false;
            } else {
                return true;
            }
        });
        setAvailableActions(newActionList);
    };

    return (
        <li
            className={"newTask__mainInfo-action" + (item.picked ? " active" : "")}
            style={{ background: `${item.background}` }}
            onClick={actionClickHandler}
        >
            <p>{item.text}</p>
            <ReactSVG
                className="close-ico"
                src={require("../../../../Image/close-ico.svg").default}
                onClick={closeActionClickHandler}
            />
        </li>
    );
};
