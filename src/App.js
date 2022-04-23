import React, { useState } from "react";
import "./App.css";
import LandingPageButtons from "./LandingPageButtons.js";
import Gameboard from "./GameBoard.js";
import OptionButtons from "./OptionButtons.js";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [players, setPlayers] = useState([]);

  return (
    <React.Fragment>
      <header>
        <div className="title-container">
          <h1>PentaG</h1>
          <img
            src="./images/icons8-pentagon-100.png"
            alt="pentagon"
            className="title-symbol"
          />
          <h1>!</h1>
        </div>
      </header>
      <section className="game-section">
        {/* <div className="move-update-container">Move Update Container</div> */}
        <div className="container">
          {display ? (
            <Gameboard players={players} />
          ) : (
            <LandingPageButtons
              display={display}
              setDisplay={setDisplay}
              setPlayers={setPlayers}
            />
          )}
        </div>
        <article className="option-buttons">
          <OptionButtons />
        </article>
      </section>
      <footer>
        <span className="created-by">
          Created by Vanessa Bano |
          <a
            href="https://github.com/vtbano/Pentago.git"
            target="_blank"
            alt="GitHub link to Pentago App"
            id="githubLink"
          >
            GitHub |
          </a>
          <a
            href="https://www.linkedin.com/in/vanessatbano/"
            target="_blank"
            alt="Vanessa Bano's LinkedIn profile"
            id="LinkedIn"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </React.Fragment>
  );
};
export default App;
