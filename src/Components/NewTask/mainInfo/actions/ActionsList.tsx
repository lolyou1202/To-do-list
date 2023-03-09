import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { actionsContetnt } from "../../../../types/types";
import { AvailableActionsContext, ContextAvailableActions, ContextPropertyToDo, PropertyToDoContext } from "../../../Context";
import { Action } from "./Action";

export const ActionsList: FC = () => {
    const { propertyToDo, setProppertyToDo } = useContext(
        PropertyToDoContext
    ) as ContextPropertyToDo;

    const { availableActions, setAvailableActions } = useContext(
        AvailableActionsContext
    ) as ContextAvailableActions;

    const [bacgroundActions] = useState<string[]>([]);
    //const [newActionInput, setNewActionInput] = useState("");
    //const [newActionModalState, setNewActionModalState] = useState(false);
    //const newActionModal = useRef(null);

    //const newActionClickHandler = () => {
    //    setNewActionModalState(!newActionModalState);
    //};

    const randomActions = () => {
        return availableActions.map((item) => {
            let rand = Math.floor(Math.random() * bacgroundActions.length);
            item.background = bacgroundActions[rand];
            bacgroundActions.splice(rand, 1);
            return item;
        });
    };

    //const newActionEnterHandler = (
    //    event: React.KeyboardEvent<HTMLInputElement>
    //) => {
    //    if (event.key === "Enter" && event.currentTarget.value !== "") {
    //        let rand = Math.floor(Math.random() * bacgroundActions.length);
    //        const newItem: actionsContetnt = {
    //            text: event.currentTarget.value,
    //            background: bacgroundActions[rand],
    //            picked: false,
    //        };
    //        bacgroundActions.splice(rand, 1);
    //        setProppertyToDo((prev) => ({
    //            ...prev,
    //            actions: [...prev.actions, newItem],
    //        }));
    //        setNewActionInput("");
    //        newActionClickHandler();
    //    }
    //};

    useEffect(() => {

    }, []);

    return (
        <ul className="newTask__mainInfo-actions">
            {availableActions.map((item, index) => {
                return <Action item={item} key={index} />;
            })}
            <li
                className={"newTask__mainInfo-newAction"}
                //onClick={newActionClickHandler}
                //ref={newActionModal}
            >
                <ReactSVG
                    className="add-actions"
                    src={require("../../../../Image/plus-ico.svg").default}
                />
                {/*<div
                    className={'newAction__modal'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <input
                        value={newActionInput}
                        onChange={(e) => setNewActionInput(e.target.value)}
                        onKeyDown={newActionEnterHandler}
                        type="text"
                        placeholder="New notes"
                    />
                </div>*/}
            </li>
        </ul>
    );
};
