import { ReactSVG } from "react-svg";
import { actionsContetnt } from "../types/types";

interface NewTaskActionProps {
  action: string
  background: string
  actionsState: [actionsContetnt[], (value: actionsContetnt[]) => void]
  index: number
}

export const NewTaskAction: React.FC<NewTaskActionProps> = ({action, background, actionsState, index}) => {
  let state = actionsState[0]
  let setState = actionsState[1]
  
  const actionClickHandler = () => {

  }

  const closeActionClickHandler = () => {
    const newActionList = [...state].filter((item, i) => i !== index)
    setState(newActionList)
  }

  return (
    <li className="newTask__mainInfo-action" style={{background: `${background}`}} onClick={actionClickHandler}>
      <p>{action}</p>
      <ReactSVG
        className="close-ico"
        src={require('../Image/close-ico.svg').default}
        onClick={closeActionClickHandler}
      />
    </li>
  )
}

