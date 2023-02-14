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
      </main>
      <div className="newTask"></div>
    </div>
  );
}