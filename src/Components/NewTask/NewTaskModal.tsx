import { FC } from "react";
import { actionsContetnt, person } from "../../types/types";
import { NewTaskActionsList } from "./NewTaskActionsList";
import { NewTaskPersoneList } from "./NewTaskPersoneList";
import Priority from "./Priority";
import TextareaItem from "./TextareaItem";

interface NewTaskModalProps {
  modalState: boolean;
  setModalState: (value: boolean) => void;
  nameToDo: string;
  setNameToDo: (value: string) => void;
  descriptionToDo: string;
  setDescriptionToDo: (value: string) => void;
  priorityToDo: string;
  setPriorityToDo: (value: string) => void;
  invitedPersonsToDo: person[];
  setInvitedPersonsToDo: (value: person[]) => void;
  actionsToDo: actionsContetnt[];
  setActionsToDo: (value: actionsContetnt[]) => void;
}

export const NewTaskModal: FC<NewTaskModalProps> = ({
  modalState,
  setModalState,
  nameToDo,
  setNameToDo,
  descriptionToDo,
  setDescriptionToDo,
  priorityToDo,
  setPriorityToDo,
  invitedPersonsToDo,
  setInvitedPersonsToDo,
  actionsToDo,
  setActionsToDo,
}) => {
  return (
    <div className={"newTask-modal" + (modalState ? " active" : "")}>
      <div>
        <div className="newTask__block newTask__mainInfo">
          <div
            className={"newTask__mainInfo-block" + (nameToDo ? "" : " cursor")}
          >
            <TextareaItem
              state={nameToDo}
              setState={setNameToDo}
              placeholder="What do you need to do?"
            />
          </div>
          <NewTaskActionsList state={actionsToDo} setState={setActionsToDo} />
          <div
            className={
              "newTask__mainInfo-block" + (descriptionToDo ? "" : " cursor")
            }
          >
            <TextareaItem
              state={descriptionToDo}
              setState={setDescriptionToDo}
              placeholder="Enter a description"
            />
          </div>
        </div>
        <Priority priority={priorityToDo} setPriority={setPriorityToDo} />
        <div className="newTask__block newTask__invite">
          <p>Invite</p>
          <NewTaskPersoneList
            invitedPersons={invitedPersonsToDo}
            setInvitedPersons={setInvitedPersonsToDo}
          />
        </div>
        <div className="newTask__buttons-block">
          <button className="newTask__buttons recurring">Recurring</button>
          <button className="newTask__buttons save">Save</button>
        </div>
        <div className="navButton" onClick={() => setModalState(false)}></div>
      </div>
    </div>
  );
};
