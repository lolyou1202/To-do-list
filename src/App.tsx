import { ReactSVG } from "react-svg";

export default function App() {

  return (
    <div className="App">
      <header className="header">
        <div>
          <h1 className="day">Today</h1>
          <p className="date">18 Jun 2023, Tuesday</p>
        </div>
        <ReactSVG
          className="calendar-ico"
          src={require('../src/Image/calendar-ico.svg').default}
        />
      </header>
      <main className="main">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <ReactSVG
            className="search-ico"
            src={require('../src/Image/search-ico.svg').default}
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
          src={require('../src/Image/plus-ico.svg').default}
        />
        <p>Add new task</p>
      </button>
      <div className="newTask-modal">
        
      </div>
    </div>
  );
}