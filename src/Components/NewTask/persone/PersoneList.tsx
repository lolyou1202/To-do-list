import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import { AvailablePersonsContext, ContextAvailablePersons } from "../../Context";
import { SinglePersone } from "./SinglePersone";

export const PersoneList: FC = () => {
    const { availablePersons, setAvailablePersons } = useContext(AvailablePersonsContext) as ContextAvailablePersons;

    const [PersonModal, setPersonModal] = useState<boolean>(false);
    const peroneModal = useRef<HTMLDivElement>(null);

    const invitePersone = () => {
        setPersonModal(prev => !prev);
        const disabledPick = [...availablePersons].map((i) => {
            i.picked = false;
            return i;
        });
        setAvailablePersons(disabledPick);
    };

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (
                PersonModal &&
                peroneModal.current &&
                !peroneModal.current.contains(event.target as HTMLElement)
            ) {
                setPersonModal((prev) => !prev);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [PersonModal]);

    return (
        <ul className="newTask__invite-list">
            {[...availablePersons]
                .filter((item) => item.invited)
                .map((item, index) => {
                    return (
                        <SinglePersone
                            item={item}
                            type="inList"
                            personModal={setPersonModal}
                            key={index}
                        />
                    );
                })}
            <li className="newTask__invite-newPersone" onClick={invitePersone}>
                <ReactSVG
                    className="add-person"
                    src={require("../../../Image/plus-ico.svg").default}
                />
                <div 
                    className={"newPersone__modal" + (PersonModal ? " active" : "")}
                    onClick={(e) => e.stopPropagation()}
                    ref={peroneModal}
                >
                    {[...availablePersons].filter((item) => !item.invited).length === 0
                        ? "No one to invite..."
                        : [...availablePersons]
                              .filter((item) => !item.invited)
                              .map((item, index) => (
                                  <SinglePersone
                                      item={item}
                                      type="inModal"
                                      personModal={setPersonModal}
                                      key={index}
                                  />
                              ))}
                </div>
            </li>
        </ul>
    );
};
