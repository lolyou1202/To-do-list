import { ReactSVG } from "react-svg";
import { person } from "../../types/types";

interface NewTaskPersoneProps {
  invitedPersons: person[];
  setInvitedPersons: (value: person[]) => void;
  item: person;
  type: string;
  personModal: (value: boolean) => void;
}

export const NewTaskPersone: React.FC<NewTaskPersoneProps> = ({
  invitedPersons,
  setInvitedPersons,
  item,
  type,
  personModal,
}) => {
  const personClickHandler = () => {
    if (type === "inList") {
      personModal(false);
      const deletePersone = [...invitedPersons].map((i) => {
        if (i === item) {
          i.picked = !i.picked;
        } else {
          i.picked = false;
        }
        return i;
      });
      setInvitedPersons(deletePersone);
    } else if (type === "inModal") {
      const addPersone = [...invitedPersons].map((i) => {
        if (i === item) {
          i.invited = !i.invited;
        }
        return i;
      });
      setInvitedPersons(addPersone);
    }
  };

  const closePersonClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newPersoneList = [...invitedPersons].map((i) => {
      if (i === item) {
        i.invited = !i.invited;
        i.picked = false;
      }
      return i;
    });
    setInvitedPersons(newPersoneList);
  };

  return (
    <div
      className={"newTask__invite-persone" + (item.picked ? " active" : "")}
      style={{
        backgroundImage: `url(${require(`../../Image/${item.avatar}`)})`,
      }}
      onClick={personClickHandler}
    >
      <ReactSVG
        className="close-ico"
        src={require("../../Image/close-ico.svg").default}
        onClick={closePersonClickHandler}
      />
    </div>
  );
};
