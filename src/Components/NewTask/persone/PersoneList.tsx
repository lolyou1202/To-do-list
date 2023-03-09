import React, { FC, useContext, useState } from "react";
//import { ReactSVG } from "react-svg";
//import { ContextPropertyToDo, PropertyToDoContext } from "../../Context";
//import { SinglePersone } from "./SinglePersone";

//export const PersoneList: FC = () => {
//    const { propertyToDo, setProppertyToDo } = useContext(
//        PropertyToDoContext
//    ) as ContextPropertyToDo;

//    const [PersonModal, setPersonModal] =
//        useState<boolean>(false);

//    const invitePersone = () => {
//        setPersonModal(prev => !prev);
//        const disabledPick = [...propertyToDo.invite].map((i) => {
//            i.picked = false;
//            return i;
//        });
//        setProppertyToDo((prev) => ({
//            ...prev,
//            invite: disabledPick,
//        }));
//    };

//    return (
//        <ul className="newTask__invite-list">
//            {[...propertyToDo.invite]
//                .filter((item) => item.invited)
//                .map((item, index) => {
//                    return (
//                        <SinglePersone
//                            item={item}
//                            type="inList"
//                            personModal={setPersonModal}
//                            key={index}
//                        />
//                    );
//                })}
//            <li className="newTask__invite-newPersone" onClick={invitePersone}>
//                <ReactSVG
//                    className="add-person"
//                    src={require("../../../Image/plus-ico.svg").default}
//                />
//                <div
//                    className={
//                        "newPersone__modal" +
//                        (PersonModal ? " active" : "") +
//                        ([...propertyToDo.invite].filter((item) => !item.invited)
//                            .length === 0
//                            ? " empty"
//                            : "")
//                    }
//                    onClick={(e) => e.stopPropagation()}
//                >
//                    {[...propertyToDo.invite].filter((item) => !item.invited)
//                        .length === 0
//                        ? "No one to invite..."
//                        : [...propertyToDo.invite]
//                              .filter((item) => !item.invited)
//                              .map((item, index) => (
//                                  <SinglePersone
//                                      item={item}
//                                      type="inModal"
//                                      personModal={setPersonModal}
//                                      key={index}
//                                  />
//                              ))}
//                </div>
//            </li>
//        </ul>
//    );
//};
