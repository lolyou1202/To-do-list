import React, { FC, useEffect, useState, useContext } from "react";
import { toDoProperty } from "../../@types/types";
import { AvailableActionsContext, AvailablePersonsContext, ContextAvailableActions, ContextAvailablePersons, PropertyToDoContext } from "../../Context/Context";
import { MainInfo } from "./mainInfo/MainInfo";
import { Buttons } from "./buttons/Buttons";
import { Time } from "./time/Time";
import { Priority } from "./priority/Priority";
import { Persone } from "./persone/Persone";
import { priorityEnum } from "../../@types/enums";
import { useFillActions } from "../../CustomHooks/useFillActions";
import { useFillPersons } from "../../CustomHooks/useFillPersons";

interface NewTaskProps {
    newTaskModalState: boolean;
    setNewTaskModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewTask: FC<NewTaskProps> = ({ newTaskModalState, setNewTaskModalState }) => {
    const { availableActions } = useContext(AvailableActionsContext) as ContextAvailableActions;
    const { availablePersons } = useContext(AvailablePersonsContext) as ContextAvailablePersons;

    const IdPickedActions = useFillActions(availableActions);
    const IdPickedPersons = useFillPersons(availablePersons);
    
    const [propertyToDo, setProppertyToDo] = useState<toDoProperty>({
        name: "",
        description: "",
        priority: priorityEnum.HIGHT,
        invite: [],
        action: null,
        time: new Date()
    });

    useEffect(() => {
        if (IdPickedActions) {
            setProppertyToDo(prev => ({
                ...prev,
                action: IdPickedActions
            }));
        }
    }, [IdPickedActions]);
    useEffect(() => {
        if (IdPickedPersons.length !== 0) {
            setProppertyToDo(prev => ({
                ...prev,
                invite: IdPickedPersons
            }));
        }
    }, [IdPickedPersons]);

    return (
        <PropertyToDoContext.Provider value={{ propertyToDo, setProppertyToDo }}>
            <div className={"newTask-modal" + (newTaskModalState ? " active" : "")}>
                <div>
                    <MainInfo />
                    <Priority />
                    <Time />
                    <Persone />
                    <Buttons setNewTaskModalState={setNewTaskModalState} />
                    <div
                        className="navButton"
                        onClick={() => setNewTaskModalState(false)}
                    ></div>
                </div>
            </div>
        </PropertyToDoContext.Provider>
    );
};
