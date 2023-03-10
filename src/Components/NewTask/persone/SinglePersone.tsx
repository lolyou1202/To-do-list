import { useContext } from "react";
import { ReactSVG } from "react-svg";
import { person } from "../../../types/types";
import {
    AvailablePersonsContext,
    ContextAvailablePersons,
} from "../../../Context/Context";

interface PersoneProps {
    item: person;
    type: string;
    personModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SinglePersone: React.FC<PersoneProps> = ({
    item,
    type,
    personModal,
}) => {
    const { availablePersons, setAvailablePersons } = useContext(
        AvailablePersonsContext
    ) as ContextAvailablePersons;

    const personClickHandler = () => {
        if (type === "inList") {
            personModal(false);
            const deletePersone = [...availablePersons].map((i) => {
                if (i.id === item.id) {
                    i.picked = !i.picked;
                }
                return i;
            });
            setAvailablePersons(deletePersone);
        } else if (type === "inModal") {
            const addPersone = [...availablePersons].map((i) => {
                if (i.id === item.id) {
                    i.invited = !i.invited;
                }
                return i;
            });
            setAvailablePersons(addPersone);
        }
    };

    const closePersonClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newPersoneList = [...availablePersons].map((i) => {
            if (i.id === item.id) {
                i.invited = !i.invited;
                i.picked = false;
            }
            return i;
        });
        setAvailablePersons(newPersoneList);
    };

    return (
        <div
            className={
                "newTask__invite-persone" + (item.picked ? " active" : "")
            }
            style={{
                backgroundImage: `url(${require(`../../../Image/${item.avatar}`)})`,
            }}
            onClick={personClickHandler}
        >
            <ReactSVG
                className="close-ico"
                src={require("../../../Image/close-ico.svg").default}
                onClick={closePersonClickHandler}
            />
        </div>
    );
};
