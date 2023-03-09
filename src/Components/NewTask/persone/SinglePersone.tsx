import { useContext } from "react";
import { ReactSVG } from "react-svg";
import { person } from "../../../types/types";
import { ContextPropertyToDo, PropertyToDoContext } from "../../Context";

interface PersoneProps {
    item: person;
    type: string;
    personModal: React.Dispatch<React.SetStateAction<boolean>>;
}

//export const SinglePersone: React.FC<PersoneProps> = ({
//    item,
//    type,
//    personModal
//}) => {
//    const { propertyToDo, setProppertyToDo } = useContext(
//        PropertyToDoContext
//    ) as ContextPropertyToDo;
    
//    const personClickHandler = () => {
//        if (type === "inList") {
//            personModal(false);
//            const deletePersone = [...propertyToDo.invite].map((i) => {
//                if (i === item) {
//                    i.picked = !i.picked;
//                } else {
//                    i.picked = false;
//                }
//                return i;
//            });
//            setProppertyToDo((prev) => ({
//                ...prev,
//                invite: deletePersone,
//            }));
//        } else if (type === "inModal") {
//            const addPersone = [...propertyToDo.invite].map((i) => {
//                if (i === item) {
//                    i.invited = !i.invited;
//                }
//                return i;
//            });
//            setProppertyToDo((prev) => ({
//                ...prev,
//                invite: addPersone,
//            }));
//        }
//    };

//    const closePersonClickHandler = (e: React.MouseEvent) => {
//        e.stopPropagation();
//        const newPersoneList = [...propertyToDo.invite].map((i) => {
//            if (i === item) {
//                i.invited = !i.invited;
//                i.picked = false;
//            }
//            return i;
//        });
//        setProppertyToDo((prev) => ({
//            ...prev,
//            invite: newPersoneList,
//        }));
//    };

//    return (
//        <div
//            className={
//                "newTask__invite-persone" + (item.picked ? " active" : "")
//            }
//            style={{
//                backgroundImage: `url(${require(`../../../Image/${item.avatar}`)})`,
//            }}
//            onClick={personClickHandler}
//        >
//            <ReactSVG
//                className="close-ico"
//                src={require("../../../Image/close-ico.svg").default}
//                onClick={closePersonClickHandler}
//            />
//        </div>
//    );
//};
