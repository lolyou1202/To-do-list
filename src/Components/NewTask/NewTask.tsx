import { FC, useState } from "react";
import { actionsContetnt, person } from "../../types/types";
import { NewTaskActionsList } from "./NewTaskActionsList";
import { NewTaskPersoneList } from "./NewTaskPersoneList";
import Priority from "./Priority";
import TextareaItem from "./TextareaItem";

interface NewTaskProps {
  newTaskModalState: boolean;
  setNewTaskModalState: (value: boolean) => void;
}

export const NewTask: FC<NewTaskProps> = ({
  newTaskModalState,
  setNewTaskModalState,
}) => {
  const [nameToDo, setNameToDo] = useState<string>("");
  const [descriptionToDo, setDescriptionToDo] = useState<string>("");
  const [priorityToDo, setPriorityToDo] = useState<string>("Hight");
  const [invitedPersonsToDo, setInvitedPersonsToDo] = useState<person[]>([
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
  const [actionsToDo, setActionsToDo] = useState<actionsContetnt[]>([
    {
      text: "Meeteng",
      background: "",
      picked: false,
    },
    {
      text: "Design project",
      background: "",
      picked: false,
    },
    {
      text: "Marketing",
      background: "",
      picked: false,
    },
    {
      text: "Review",
      background: "",
      picked: false,
    },
  ]);

  return (
    <div className={"newTask-modal" + (newTaskModalState ? " active" : "")}>
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
        <div
          className="navButton"
          onClick={() => setNewTaskModalState(false)}
        ></div>
      </div>
    </div>
  );
};
