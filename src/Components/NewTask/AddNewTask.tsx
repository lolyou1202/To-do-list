import { FC } from "react";
import { ReactSVG } from "react-svg";

interface AddNewTaskProps {
  setModalState: (value: boolean) => void;
}

export const AddNewTask: FC<AddNewTaskProps> = ({ setModalState }) => {
  return (
    <button className="newTask" onClick={() => setModalState(true)}>
      <ReactSVG
        className="plus-ico"
        src={require("../../Image/plus-ico.svg").default}
      />
      <p>Add new task</p>
    </button>
  );
};
