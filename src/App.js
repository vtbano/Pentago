import React, { useState } from "react";
import "./App.css";
import LandingPageButtons from "./landingPage.js";
import Gameboard from "./gameBoard.js";
import OptionButtons from "./optionButtons.js";

const App = () => {
  const [display, setDisplay] = useState(false);
  // const [currentPlayer, setCurrentPlayer] = useState({
  //   name: "Player 1",
  //   number: 1,
  // });
  // const [players, setPlayers] = useState[{}];

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
        <div className="container">
          {display ? (
            <Gameboard />
          ) : (
            <LandingPageButtons display={display} setDisplay={setDisplay} />
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
