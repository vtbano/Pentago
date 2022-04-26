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
  const [winPlayer, setWinPlayer] = useState(null);
  const [gameResult, setGameResult] = useState(gameResultType.InitialGame);

  const topContainerDisplay = (gameResult, winPlayer) => {
    if (gameResult === "InitialGame") {
      return <StartGame />;
    } else if (gameResult === "Tie") {
      return <TieGameRestart />;
    } else if (gameResult === "Win") {
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
              topContainerDisplay={topContainerDisplay}
              setDisplay={setDisplay}
              setGameResult={setGameResult}
              gameResult={gameResult}
              setWinPlayer={setWinPlayer}
              winPlayer={winPlayer}
            />
          ) : (
            <LandingPageButtons
              display={display}
              setDisplay={setDisplay}
              setPlayers={setPlayers}
              topContainer={() => topContainerDisplay(gameResult, winPlayer)}
              // topContainer={topContainer}
            />
          )}
        </div>
        <article className="option-buttons">
          <OptionButtons
            setDisplay={setDisplay}
            setPlayers={setPlayers}
            topContainer={() => topContainerDisplay(gameResult, winPlayer)}
            resetGame={() => {
              setGameResult(gameResultType.InitialGame);
              setPlayers([]);
              setDisplay(false);
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
