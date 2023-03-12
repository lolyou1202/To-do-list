import { FC, useContext, useRef } from "react";
import { priorityEnum } from "../../../@types/enums";
import { ContextPropertyToDo, PropertyToDoContext } from "../../../Context/Context";

export const Priority: FC = () => {
    const { propertyToDo, setProppertyToDo } = useContext(PropertyToDoContext) as ContextPropertyToDo;

    const track = useRef(null);

    function handlerChange(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLElement;

        switch (target.textContent) {
            case "Hight":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: priorityEnum.HIGHT,
                }));
                break;
            case "Medium":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: priorityEnum.MEDIUM,
                }));
                break;
            case "Low":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: priorityEnum.LOW,
                }));
                break;
            case "None":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: priorityEnum.NONE,
                }));
                break;
        }
    }

    return (
        <div className="newTask__block newTask__priority">
            <p>Priority</p>
            <ul className="newTask__priority-tabs">
                <li
                    className={"priority-item" + (propertyToDo.priority === "Hight" ? " active" : "")}
                    onClick={handlerChange}
                >
                    Hight
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority === "Medium" ? " active" : "")}
                    onClick={handlerChange}
                >
                    Medium
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority === "Low" ? " active" : "")
                    }
                    onClick={handlerChange}
                >
                    Low
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority === "None" ? " active" : "")}
                    onClick={handlerChange}
                >
                    None
                </li>
            </ul>
            <div
                className={`newTask__priority-track ${propertyToDo.priority}`}
                ref={track}
            ></div>
        </div>
    );
};
