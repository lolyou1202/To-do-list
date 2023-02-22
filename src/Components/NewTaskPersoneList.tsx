import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import { person } from "../types/types";
import { NewTaskPersone } from "./NewTaskPersone";

interface NewTaskPersoneListProps {
  personsState: person[];
  setPersonsState: (value: person[]) => void;
  totalPersons: person[];
  setTotalpersons: (value: person[]) => void;
}

export const NewTaskPersoneList: FC<NewTaskPersoneListProps> = ({
  personsState,
  setPersonsState,
}) => {
  const invitePersone = () => {

  };

  return (
    <ul className="newTask__invite-list">
      {personsState.map((item, index) => (
        <NewTaskPersone
          persons={personsState}
          setPersons={setPersonsState}
          person={item}
          key={index}
        />
      ))}
      <li
        className="newTask__invite-newPersone"
        onClick={invitePersone}
      >
        <ReactSVG
          className="add-person"
          src={require("../Image/plus-ico.svg").default}
        />
        <div
          className={`newPersone__modal`}
          onClick={(e) => e.stopPropagation()}
        >
          sdjkjsdjhs
        </div>
      </li>
    </ul>
  );
};
