import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IAddNewTask {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewTask: FC<IAddNewTask> = ({ setModalState }) => {
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
