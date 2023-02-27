import React, { FC, useState } from "react";
import { ReactSVG } from "react-svg";
import { person } from "../../types/types";
import { NewTaskPersone } from "./NewTaskPersone";

interface NewTaskPersoneListProps {
  invitedPersons: person[];
  setInvitedPersons: (value: person[]) => void;
}

export const NewTaskPersoneList: FC<NewTaskPersoneListProps> = ({
  invitedPersons,
  setInvitedPersons,
}) => {
  const [newPersonModalState, setNewPersonModalState] =
    useState<boolean>(false);

  const invitePersone = () => {
    setNewPersonModalState(!newPersonModalState);
    const disabledPick = [...invitedPersons].map((i) => {
      i.picked = false;
      return i;
    });
    setInvitedPersons(disabledPick);
  };

  return (
    <ul className="newTask__invite-list">
      {[...invitedPersons]
        .filter((item) => item.invited)
        .map((item, index) => {
          return (
            <NewTaskPersone
              invitedPersons={invitedPersons}
              setInvitedPersons={setInvitedPersons}
              item={item}
              type="inList"
              personModal={setNewPersonModalState}
              key={index}
            />
          );
        })}
      <li className="newTask__invite-newPersone" onClick={invitePersone}>
        <ReactSVG
          className="add-person"
          src={require("../../Image/plus-ico.svg").default}
        />
        <div
          className={
            "newPersone__modal" +
            (newPersonModalState ? " active" : "") +
            ([...invitedPersons].filter((item) => !item.invited).length === 0
              ? " empty"
              : "")
          }
          onClick={(e) => e.stopPropagation()}
        >
          {[...invitedPersons].filter((item) => !item.invited).length === 0
            ? "No one to invite..."
            : [...invitedPersons]
                .filter((item) => !item.invited)
                .map((item, index) => (
                  <NewTaskPersone
                    invitedPersons={invitedPersons}
                    setInvitedPersons={setInvitedPersons}
                    item={item}
                    type="inModal"
                    personModal={setNewPersonModalState}
                    key={index}
                  />
                ))}
        </div>
      </li>
    </ul>
  );
};
