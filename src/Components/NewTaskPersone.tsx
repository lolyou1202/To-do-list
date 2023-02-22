import { ReactSVG } from "react-svg";
import { person } from "../types/types";

interface NewTaskPersoneProps {
  persons: person[];
  setPersons: (value: person[]) => void;
  person: person;
}

export const NewTaskPersone: React.FC<NewTaskPersoneProps> = ({
  persons,
  setPersons,
  person,
}) => {
  const personClickHandler = () => {
    const addPickedPersone = [...persons].map((item) => {
      if (item === person) {
        item.picked = !item.picked;
      }
      return item;
    });
    setPersons(addPickedPersone);
  };

  const closePersonClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPersoneList = [...persons].filter((i) => {
      if (i === person) {
        return false;
      } else {
        return true;
      }
    });
    setPersons(newPersoneList);
  };

  return (
    <li
      className={"newTask__invite-persone" + (person.picked ? " active" : "")}
      style={{
        backgroundImage: `url(${require(`../Image/${person.avatar}`)})`,
      }}
      onClick={personClickHandler}
    >
      <ReactSVG
        className="close-ico"
        src={require("../Image/close-ico.svg").default}
        onClick={closePersonClickHandler}
      />
    </li>
  );
};
