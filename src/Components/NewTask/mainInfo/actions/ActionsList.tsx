import React, { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { AvailableActions } from "../../../../@types/types";
import { AvailableActionsContext, ContextAvailableActions } from "../../../../Context/Context";
import { ActionsBackgrounds } from "../../../../@settings/settings";
import { Action } from "./Action";

export const ActionsList: FC = () => {
    const { availableActions, setAvailableActions } = useContext(AvailableActionsContext) as ContextAvailableActions;

    const [bacgroundActions, setBacgroundActions] = useState<string[]>(ActionsBackgrounds);
    const [newActionInput, setNewActionInput] = useState("");
    const [newActionModalState, setNewActionModalState] = useState(false);

    const newActionModal = useRef<HTMLDivElement>(null);

    const randomBackground = () => {
        const updateBacgroundActions = [...bacgroundActions];
        const newAvailableActions = [...availableActions].map((item) => {
            let rand = Math.floor(
                Math.random() * updateBacgroundActions.length
            );
            item.background = updateBacgroundActions[rand];
            updateBacgroundActions.splice(rand, 1);
            return item;
        });
        setBacgroundActions(updateBacgroundActions);
        setAvailableActions(newAvailableActions)
    };

    const updateBacgroundActions = useCallback(() =>
        bacgroundActions.length === 0 &&
        setBacgroundActions(ActionsBackgrounds),
    [bacgroundActions]
    );

    const newActionEnterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const updateBacgroundActions = [...bacgroundActions];
        if (event.key === "Enter" && event.currentTarget.value !== "") {
            let rand = Math.floor(
                Math.random() * updateBacgroundActions.length
            );
            const newItem: AvailableActions = {
                id: availableActions.length + 1,
                text: event.currentTarget.value,
                background: updateBacgroundActions[rand],
                picked: false,
            };
            setBacgroundActions(
                updateBacgroundActions.filter((_, i) => i !== rand)
            );
            setAvailableActions(prev => [...prev, newItem]);
            setNewActionInput("");
            setNewActionModalState(false);
        }
    };

    const unfocusActions = () => {
        setNewActionModalState(prev => !prev);
        const disabledPick = [...availableActions].map((i) => {
            i.picked = false;
            return i;
        });
        setAvailableActions(disabledPick);
    };

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (
                newActionModalState &&
                newActionModal.current &&
                !newActionModal.current.contains(event.target as HTMLElement)
            ) {
                setNewActionModalState(prev => !prev);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [newActionModalState]);

    useEffect(() => {
        randomBackground()
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        updateBacgroundActions()
    }, [updateBacgroundActions]);

    return (
        <ul className="newTask__mainInfo-actions">
            {availableActions.map(item => (
                <Action item={item} key={item.id} />
            ))}
            <li
                className={"newTask__mainInfo-addAction"}
                onClick={unfocusActions}
            >
                <ReactSVG
                    className="add-actions"
                    src={require("../../../../Image/plus-ico.svg").default}
                />
                <div
                    className={"newAction__modal" + (newActionModalState ? " active" : "")}
                    onClick={e => e.stopPropagation()}
                    ref={newActionModal}
                >
                    <input
                        value={newActionInput}
                        onChange={e => setNewActionInput(e.target.value)}
                        onKeyDown={newActionEnterHandler}
                        type="text"
                        placeholder="New notes"
                    />
                </div>
            </li>
        </ul>
    );
};
