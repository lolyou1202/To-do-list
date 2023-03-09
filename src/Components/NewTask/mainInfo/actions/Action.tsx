import { useContext } from "react";
import { ReactSVG } from "react-svg";
import { actionsContetnt } from "../../../../types/types";
import { ContextPropertyToDo, PropertyToDoContext } from "../../../Context";

interface ActionProps {
    item: actionsContetnt;
}

export const Action: React.FC<ActionProps> = ({ item }) => {
    const { propertyToDo, setProppertyToDo } = useContext(
        PropertyToDoContext
    ) as ContextPropertyToDo;

    //const actionClickHandler = () => {
    //    const addPickedAction = [...propertyToDo.actions].map((i) => {
    //        if (i === item) {
    //            i.picked = !i.picked;
    //        } else {
    //            i.picked = false;
    //        }
    //        return i;
    //    });
    //    setProppertyToDo((prev) => ({
    //        ...prev,
    //        actions: addPickedAction,
    //    }));
    //};

    //const closeActionClickHandler = (e: React.MouseEvent) => {
    //    e.stopPropagation();

    //    const newActionList = [...propertyToDo.actions].filter((i) => {
    //        if (i === item) {
    //            return false;
    //        } else {
    //            return true;
    //        }
    //    });
    //    setProppertyToDo((prev) => ({
    //        ...prev,
    //        actions: newActionList,
    //    }));
    //};

    return (
        <li
            className={
                "newTask__mainInfo-action" + (item.picked ? " active" : "")
            }
            style={{ background: `${item.background}` }}
            //onClick={actionClickHandler}
        >
            <p>{item.text}</p>
            <ReactSVG
                className="close-ico"
                src={require("../../../../Image/close-ico.svg").default}
                //onClick={closeActionClickHandler}
            />
        </li>
    );
};
