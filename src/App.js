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
const { flatten } = batteries;

const createFlatBoardSpaces = (boardBlocks) =>
  boardBlocks.map((block) => {
    return flatten(block);
  });

const recreateBoardBlocks = (boardSpaces) =>
  boardSpaces.map((arr) => {
    return [arr.slice(0, 3), arr.slice(3, 6), arr.slice(6, 9)];
  });

const recreateBoardArray = (newBoardBlocks) => {
  return [
    [newBoardBlocks[0], newBoardBlocks[1], newBoardBlocks[2]],
    [newBoardBlocks[3], newBoardBlocks[4], newBoardBlocks[5]],
    [newBoardBlocks[6], newBoardBlocks[7], newBoardBlocks[8]],
  ];
};

const App = () => {
  const [board, setBoard] = useState(boardArray);
  const [display, setDisplay] = useState(false);

  // const [players, setPlayers] = useState[{}];
  const markPosition = (marker, blockIndex, board, SpaceIndex) => {
    const boardBlocks = flatten(board);
    // console.log("board blocks:", boardBlocks);
    const boardSpaces = createFlatBoardSpaces(boardBlocks);
    boardSpaces[blockIndex][SpaceIndex] = marker;
    console.log("board Spaces:", boardSpaces);
    const newBoardBlocks = recreateBoardBlocks(boardSpaces);
    console.log("new board blocks:", newBoardBlocks);
    const newBoard = recreateBoardArray(newBoardBlocks);
    // console.log("NEW BOARD:", newBoard[0], newBoard[1], newBoard[2]);
    return setBoard(newBoard);
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
