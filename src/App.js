import React, { useState } from "react";
import "./App.css";
import LandingPageButtons from "./LandingPageButtons.js";
import Gameboard from "./GameBoard.js";
import OptionButtons from "./OptionButtons.js";
import StartGame from "./StartGame.js";
import WinGame from "./WinGame.js";
import TieGameRestart from "./TieGameRestart.js";
import gameResultType from "./gameResultType.js";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [players, setPlayers] = useState([]);
  const [topContainer, setTopContainer] = useState("startGame");
  const [winPlayer, setWinPlayer] = useState(null);
  const [gameResult, setGameResult] = useState(gameResultType.InitialGame);

  const topContainerDisplay = (winPlayer, gameResult) => {
    if (gameResult === "InitialGame") {
      return <StartGame />;
    } else if (gameResult === "Tie") {
      return <TieGameRestart />;
    } else if (gameResult === "WinGame") {
      return <WinGame winPlayer={winPlayer} />;
    }
  };

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
            <Gameboard
              players={players}
              setPlayers={setPlayers}
              setTopContainer={setTopContainer}
              topContainerDisplay={topContainerDisplay}
              topContainer={topContainer}
              display={display}
              setDisplay={setDisplay}
              setGameResult={setGameResult}
              setWinPlayer={setWinPlayer}
            />
          ) : (
            <LandingPageButtons
              display={display}
              setDisplay={setDisplay}
              setPlayers={setPlayers}
              topContainerDisplay={topContainerDisplay}
              topContainer={topContainer}
            />
          )}
        </div>
        <article className="option-buttons">
          <OptionButtons
            setDisplay={setDisplay}
            setPlayers={setPlayers}
            setTopContainer={setTopContainer}
            topContainerDisplay={topContainerDisplay}
            topContainer={topContainer}
            resetGame={() => {
              setGameResult(gameResultType.InitialGame);
              setPlayers([]);
              setDisplay(false);
              setTopContainer("startGame");
              topContainerDisplay(topContainer);
            }}
          />
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
