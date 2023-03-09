import { FC, useState } from "react";
import { AvailableActions, toDoProperty } from "../../types/types";
import { AvailableActionsContext, PropertyToDoContext } from "../Context";
import { MainInfo } from "./mainInfo/MainInfo";
import { Buttons } from "./buttons/Buttons";
import { Time } from "./time/Time";
import { Priority } from "./priority/Priority";
import { Persone } from "./persone/Persone";
import { priorityEnum } from "../../types/enums";

interface NewTaskProps {
    newTaskModalState: boolean;
    setNewTaskModalState: (value: boolean) => void;
}

export const NewTask: FC<NewTaskProps> = ({
    newTaskModalState,
    setNewTaskModalState,
}) => {
    const [propertyToDo, setProppertyToDo] = useState<toDoProperty>({
        name: "",
        description: "",
        priority: priorityEnum.HIGHT,
        invite: [],
        actions: [],
        time: new Date(),
    });

    const [availableActions, setAvailableActions] = useState<AvailableActions[]>([
        {
            id: 1,
            text: "Meeteng",
            background: "",
            picked: false,
        },
        {
            id: 2,
            text: "Design project",
            background: "",
            picked: false,
        },
        {
            id: 3,
            text: "Marketing",
            background: "",
            picked: false,
        },
        {
            id: 4,
            text: "Review",
            background: "",
            picked: false,
        }
    ]);
    console.log(availableActions)
    const [availablePersons, setAvailablePersons] = useState([
        {
            id: 1,
            name: "Alex",
            avatar: "person-1.jpg",
            invited: false,
            picked: false,
        },
        {
            id: 2,
            name: "Mila",
            avatar: "person-2.jpg",
            invited: false,
            picked: false,
        },
        {
            id: 3,
            name: "Anton",
            avatar: "person-3.jpg",
            invited: false,
            picked: false,
        },
        {
            id: 4,
            name: "Kira",
            avatar: "person-4.jpg",
            invited: false,
            picked: false,
        },
        {
            id: 5,
            name: "Den",
            avatar: "person-5.jpg",
            invited: false,
            picked: false,
        },
    ]);

    return (
        <AvailableActionsContext.Provider
            value={{ availableActions, setAvailableActions }}
        >
            <PropertyToDoContext.Provider
                value={{ propertyToDo, setProppertyToDo }}
            >
                <div
                    className={
                        "newTask-modal" + (newTaskModalState ? " active" : "")
                    }
                >
                    <div>
                        <MainInfo />
                        <Priority />
                        <Time />
                        <Persone />
                        <Buttons />
                        <div
                            className="navButton"
                            onClick={() => setNewTaskModalState(false)}
                        ></div>
                    </div>
                </div>
            </PropertyToDoContext.Provider>
        </AvailableActionsContext.Provider>
    );
};
