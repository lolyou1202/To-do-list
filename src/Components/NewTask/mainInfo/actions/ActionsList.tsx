import React, { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { AvailableActions } from "../../../../types/types";
import { AvailableActionsContext, ContextAvailableActions, ContextPropertyToDo, PropertyToDoContext } from "../../../Context";
import { ActionsBackgrounds } from "../settings/settings";
import { Action } from "./Action";

export const ActionsList: FC = () => {
    const { availableActions, setAvailableActions } = useContext(
        AvailableActionsContext
    ) as ContextAvailableActions;

    const [bacgroundActions, setBacgroundActions] = useState<string[]>(ActionsBackgrounds);
    const [newActionInput, setNewActionInput] = useState("");
    const [newActionModalState, setNewActionModalState] = useState(false);
    const newActionModal = useRef<HTMLDivElement>(null);

    const randomActions = () => {
        return availableActions.map((item) => {
            let rand = Math.floor(Math.random() * bacgroundActions.length);
            item.background = bacgroundActions[rand];
            bacgroundActions.splice(rand, 1);
            return item;
        });
    }

    const newActionEnterHandler = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter" && event.currentTarget.value !== "") {
            let rand = Math.floor(Math.random() * bacgroundActions.length);
            const newItem: AvailableActions = {
                id: availableActions.length + 1,
                text: event.currentTarget.value,
                background: bacgroundActions[rand],
                picked: false,
            };
            bacgroundActions.splice(rand, 1);
            setAvailableActions((prev) => ([
                ...prev,
                newItem,
            ]));
            setNewActionInput("");
            setNewActionModalState(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (newActionModalState && newActionModal.current && !newActionModal.current.contains(event.target as HTMLElement)) {
                setNewActionModalState(prev => !prev)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [newActionModalState]);

    useEffect(() => {
        setAvailableActions(randomActions)
        // eslint-disable-next-line
    }, []);

    return (
        <ul className="newTask__mainInfo-actions">
            {availableActions.map((item) => {
                return <Action item={item} key={item.id} />;
            })}
            <li
                className={"newTask__mainInfo-addAction"}
                onClick={() => setNewActionModalState(prev => !prev)}
            >
                <ReactSVG
                    className="add-actions"
                    src={require("../../../../Image/plus-ico.svg").default}
                />
                <div
                    className={'newAction__modal' + (newActionModalState ? ' active' : '')}
                    onClick={(e) => e.stopPropagation()}
                    ref={newActionModal}
                >
                    <input
                        value={newActionInput}
                        onChange={(e) => setNewActionInput(e.target.value)}
                        onKeyDown={newActionEnterHandler}
                        type="text"
                        placeholder="New notes"
                    />
                </div>
            </li>
        </ul>
    );
};
