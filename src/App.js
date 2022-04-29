import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPageButtons from "./LandingPageButtons.js";
import Gameboard from "./GameBoard.js";
import OptionButtons from "./OptionButtons.js";
import StartGame from "./StartGame.js";
import WinGame from "./WinGame.js";
import TieGameRestart from "./TieGameRestart.js";
import gameResultType from "./gameResultType.js";
import Footer from "./Footer.js";

const getLocalStorage = () => {
  let moves = localStorage.getItem("list");
  if (moves) {
    return (moves = JSON.parse(localStorage.getItem("moves")));
  } else {
    return [];
  }
};

const App = () => {
  const [display, setDisplay] = useState(false);
  const [players, setPlayers] = useState([]);
  const [winPlayer, setWinPlayer] = useState(null);
  const [gameResult, setGameResult] = useState(gameResultType.InitialGame);
  const [moveHisotry, setMoveHistory] = useState("");
  const [moves, setMoves] = useState(getLocalStorage());
  const [isActive, setActive] = useState(false);
  const [footerActive, setFooterActive] = useState(true);

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

  useEffect(() => {
    localStorage.setItem("moves", JSON.stringify(moves));
  }, [moves]);

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
                setMoves={setMoves}
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
          <article className={isActive ? "click-rules" : "option-buttons"}>
            <OptionButtons
              topContainer={() => topContainerDisplay(gameResult, winPlayer)}
              resetGame={() => {
                setGameResult(gameResultType.InitialGame);
                setPlayers([]);
                setDisplay(false);
              }}
              moves={moves}
              handleToggle={handleToggle}
              setFooterActive={() => setFooterActive(!footerActive)}
            />
          </article>
        </section>
        <footer>{footerActive ? <Footer /> : ""}</footer>
      </div>
    </React.Fragment>
  );
};
export default App;
