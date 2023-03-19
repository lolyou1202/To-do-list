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
                    priority: {
                        name: priorityEnum.HIGHT,
                        value: 1
                    },
                }));
                break;
            case "Medium":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: {
                        name: priorityEnum.MEDIUM,
                        value: 2
                    },
                }));
                break;
            case "Low":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: {
                        name: priorityEnum.LOW,
                        value: 3
                    },
                }));
                break;
            case "None":
                setProppertyToDo(prev => ({
                    ...prev,
                    priority: {
                        name: priorityEnum.NONE,
                        value: 4
                    },
                }));
                break;
        }
    }

    return (
        <div className="newTask__block newTask__priority">
            <p>Priority</p>
            <ul className="newTask__priority-tabs">
                <li
                    className={"priority-item" + (propertyToDo.priority.name === "Hight" ? " active" : "")}
                    onClick={handlerChange}
                >
                    Hight
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority.name === "Medium" ? " active" : "")}
                    onClick={handlerChange}
                >
                    Medium
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority.name === "Low" ? " active" : "")
                    }
                    onClick={handlerChange}
                >
                    Low
                </li>
                <li
                    className={"priority-item" + (propertyToDo.priority.name === "None" ? " active" : "")}
                    onClick={handlerChange}
                >
                    None
                </li>
            </ul>
            <div
                className={`newTask__priority-track ${propertyToDo.priority.name}`}
                ref={track}
            ></div>
        </div>
    );
};
