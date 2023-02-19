import { useState } from "react";
import { ReactSVG } from "react-svg";
import { NewTaskActionsList } from "./Components/NewTaskActionsList";
import Priority from "./Components/Priority";
import TextareaItem from "./Components/TextareaItem";
import { actionsContetnt } from "./types/types";

export default function App() {
  const [nameToDoState, setNameToDoState] = useState("");
  const [descriptionToDoState, setDescriptionToDoState] = useState("");
  const [actionsState, setActionsState] = useState<actionsContetnt[]>([
    {
      text: "Meeteng",
      background: "",
    },
    {
      text: "Design project",
      background: "",
    },
    {
      text: "Marketing",
      background: "",
    },
    {
      text: "Review",
      background: "",
    },
  ]);
  console.log(actionsState)
  return (
    <div className="App">
      <header className="header">
        <div>
          <h1 className="day">Today</h1>
          <p className="date">18 Jun 2023, Tuesday</p>
        </div>
        <ReactSVG
          className="calendar-ico"
          src={require("./Image/calendar-ico.svg").default}
        />
      </header>
      <main className="main">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <ReactSVG
            className="search-ico"
            src={require("./Image/search-ico.svg").default}
          />
        </div>
        <ul className="stages">
          <li className="stages__item stages__undone active">
            <p>Undone</p>
          </li>
          <li className="stages__item stages__meetings">
            <p>Meetings</p>
          </li>
          <li className="stages__item stages__consummation">
            <p>Consummation</p>
          </li>
        </ul>
        <div className="toDo__list">
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
          <div className="toDo__task">
            <div className="task-content">
              <h2 className="task-name">Project daily stand-up</h2>
              <p className="task-description">At the conference center</p>
            </div>
            <div className="task-priority"></div>
            <div className="task-colorMark"></div>
            <div className="task-contact">
              <span className="task-time">9:00 am</span>
              <ul className="task-invited">
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
                <li className="task-invited-person"></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <button className="newTask">
        <ReactSVG
          className="plus-ico"
          src={require("./Image/plus-ico.svg").default}
        />
        <p>Add new task</p>
      </button>
      <div className="wrapper-modal">
        <div className="newTask-modal active">
          <div className="newTask__block newTask__mainInfo">
            <div
              className={
                "newTask__mainInfo-block" + (nameToDoState ? "" : " cursor")
              }
            >
              <TextareaItem
                state={nameToDoState}
                setState={setNameToDoState}
                placeholder="What do you need to do?"
              />
            </div>
            <NewTaskActionsList
              state={actionsState}
              setState={setActionsState}
            />
            <div
              className={
                "newTask__mainInfo-block" +
                (descriptionToDoState ? "" : " cursor")
              }
            >
              <TextareaItem
                state={descriptionToDoState}
                setState={setDescriptionToDoState}
                placeholder="Enter a description"
              />
            </div>
          </div>
          <Priority />
          <div className="newTask__block newTask__invite">
            <p>Invite</p>
            <ul className="newTask__invite-list">
              <li className="newTask__invite-persone"></li>
              <li className="newTask__invite-persone"></li>
              <li className="newTask__invite-persone"></li>
              <li className="newTask__invite-persone"></li>
              <li className="newTask__invite-newPersone">
                <ReactSVG
                  className="add-person"
                  src={require("./Image/plus-ico.svg").default}
                />
              </li>
            </ul>
          </div>
          <div className="newTask__buttons-block">
            <button className="newTask__buttons recurring">Recurring</button>
            <button className="newTask__buttons save">Save</button>
          </div>
          <div className="navButton"></div>
        </div>
      </div>
    </div>
  );
}
