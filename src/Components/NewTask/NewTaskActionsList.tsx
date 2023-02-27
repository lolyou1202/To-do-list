import React, { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { actionsContetnt } from "../../types/types";
import { NewTaskAction } from "./NewTaskAction";

interface NewTaskActionsListProps {
  state: actionsContetnt[];
  setState: (value: actionsContetnt[]) => void;
}

export const NewTaskActionsList: React.FC<NewTaskActionsListProps> = ({
  state,
  setState,
}) => {
  const [bacgroundActions] = useState<string[]>([
    "#C3BEF0",
    "#B9D7EA",
    "#E84A5F",
    "#9DF3C4",
    "#B693FE",
    "#E6A4B4",
    "#6C5B7C",
    "#3FBAC2",
    "#679B9B",
  ]);
  const [position, setPosition] = useState("");
  const [newActionInput, setNewActionInput] = useState("");
  const [newActionModalState, setNewActionModalState] = useState(false);
  const newActionModal = useRef(null);

  const newActionClickHandler = () => {
    setPosition(positionModal(newActionModal.current));
    setNewActionModalState(!newActionModalState);
  };

  const positionModal = (element: any) => {
    const elementRect = element.getBoundingClientRect();
    if (
      window.innerWidth - elementRect.right > 80 &&
      elementRect.left - 80 > 0
    ) {
      return "top";
    } else if (
      elementRect.left > 80 &&
      window.innerWidth - elementRect.right < 80
    ) {
      return "left";
    } else {
      return "right";
    }
  };

  const randomActions = () => {
    return state.map((item) => {
      let rand = Math.floor(Math.random() * bacgroundActions.length);
      item.background = bacgroundActions[rand];
      bacgroundActions.splice(rand, 1);
      return item;
    });
  };

  const newActionEnterHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && event.currentTarget.value !== "") {
      let rand = Math.floor(Math.random() * bacgroundActions.length);
      const newItem: actionsContetnt = {
        text: event.currentTarget.value,
        background: bacgroundActions[rand],
        picked: false,
      };
      bacgroundActions.splice(rand, 1);
      setState([...state, newItem]);
      setNewActionInput("");
      newActionClickHandler();
    }
  };

  useEffect(() => {
    setState(randomActions());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="newTask__mainInfo-actions">
      {state.map((item, index) => {
        return (
          <NewTaskAction
            item={item}
            state={state}
            setState={setState}
            key={index}
          />
        );
      })}
      <li
        className={
          "newTask__mainInfo-newAction" + (newActionModalState ? " active" : "")
        }
        onClick={newActionClickHandler}
        ref={newActionModal}
      >
        <ReactSVG
          className="add-actions"
          src={require("../../Image/plus-ico.svg").default}
        />
        <div
          className={`newAction__modal ${position}`}
          onClick={(e) => e.stopPropagation()}
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
