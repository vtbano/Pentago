import React, { useState } from "react";
import "./App.css";
import boardArray from "./boardArray.js";
import { batteries } from "./batteries.js";
import LandingPageButtons from "./landingPage.js";
import Gameboard from "./gameBoard.js";
import OptionButtons from "./optionButtons.js";

// const numberOfPlayersSelected = (number) => {
//   if (number === 2) {
//     return setPlayers([
//       { name: "Player 1", number: 1 },
//       { name: "Player 2", number: 2 },
//     ]);
//   } else if (number === 3) {
//     return setPlayers([
//       { name: "Player 1", number: 1 },
//       { name: "Player 2", number: 2 },
//       { name: "Player 3", number: 3 },
//     ]);
//   } else if (number === 4) {
//     return setPlayers([
//       { name: "Player 1", number: 1 },
//       { name: "Player 2", number: 2 },
//       { name: "Player 3", number: 3 },
//       { name: "Player 4", number: 4 },
//     ]);
//   }
// };

const markPosition = (marker, blockIndex, board, SpaceIndex, setBoard) => {
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  const boardSpaces = flatten(boardBlocks);
  boardSpaces[blockIndex][SpaceIndex] = marker;
  boardBlocks[blockIndex] = boardSpaces[blockIndex];
  const newMarkedBoard = [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    // [boardSpaces[0], boardSpaces[1], boardSpaces[2]],
    // [boardSpaces[3], boardSpaces[4], boardSpaces[5]],
    // [boardSpaces[6], boardSpaces[7], boardSpaces[8]],
  ];
  return setBoard(newMarkedBoard);
};

const App = () => {
  const [board, setBoard] = useState(boardArray);
  const [display, setDisplay] = useState(false);

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
        {/* <div className="move-update-container">Move Update Container</div> */}
        <div className="container">
          {display ? (
            <Gameboard
              board={board}
              setBoard={setBoard}
              markPosition={markPosition}
            />
          ) : (
            <LandingPageButtons
              display={display}
              setDisplay={setDisplay}
              // players={players}
              // setPlayers={setPlayers}
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
