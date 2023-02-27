import { ReactSVG } from "react-svg";
import { actionsContetnt } from "../../types/types";

interface NewTaskActionProps {
  state: actionsContetnt[];
  setState: (value: actionsContetnt[]) => void;
  item: actionsContetnt;
}

export const NewTaskAction: React.FC<NewTaskActionProps> = ({
  state,
  setState,
  item,
}) => {
  const actionClickHandler = () => {
    const addPickedAction = [...state].map((i) => {
      if (i === item) {
        i.picked = !i.picked;
      } else {
        i.picked = false;
      }
      return i;
    });
    setState(addPickedAction);
  };

  const closeActionClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newActionList = [...state].filter((i) => {
      if (i === item) {
        return false;
      } else {
        return true;
      }
    });
    setState(newActionList);
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
        src={require("../../Image/close-ico.svg").default}
        onClick={closeActionClickHandler}
      />
    </li>
  );
};
