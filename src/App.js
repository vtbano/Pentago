import React, { useState } from "react";
import "./App.css";
import LandingPageButtons from "./LandingPageButtons.js";
import Gameboard from "./GameBoard.js";
import OptionButtons from "./OptionButtons.js";
import StartGame from "./StartGame.js";
import WinGame from "./WinGame.js";
import TieGameRestart from "./TieGameRestart.js";
import gameResultType from "./gameResultType.js";
import Footer from "./Footer.js";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [players, setPlayers] = useState([]);
  const [winPlayer, setWinPlayer] = useState(null);
  const [gameResult, setGameResult] = useState(gameResultType.InitialGame);
  const [isActive, setActive] = useState(false);
  const [footerActive, setFooterActive] = useState(true);
  const [moves, setMoves] = useState([]);

  const handleToggle = () => {
    setActive(!isActive);
  };

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
      <div className="game-body">
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
                moves={moves}
                setMoves={setMoves}
              />
            ) : (
              <LandingPageButtons
                display={display}
                setDisplay={setDisplay}
                setPlayers={setPlayers}
                topContainer={() => topContainerDisplay(gameResult, winPlayer)}
                setMoves={setMoves}
              />
            )}
          </div>
          <article className={isActive ? "click-rules" : "option-buttons"}>
            <OptionButtons
              topContainer={() => topContainerDisplay(gameResult, winPlayer)}
              resetGame={() => {
                setGameResult(gameResultType.InitialGame);
                setPlayers([]);
                setDisplay(false);
                setMoves([]);
              }}
              handleToggle={handleToggle}
              setFooterActive={() => setFooterActive(!footerActive)}
              moves={moves}
            />
          </article>
        </section>
        <footer>{footerActive ? <Footer /> : ""}</footer>
      </div>
    </React.Fragment>
  );
};
export default App;
