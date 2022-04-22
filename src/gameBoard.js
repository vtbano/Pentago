import React, { useState } from "react";
import { batteries } from "./batteries.js";
import ArrowButtons from "./directionArrows.js";
import Block from "./block.js";

const Gameboard = ({
  board,
  setBoard,
  markPosition,
  rotateBlockSelected,
  players,
}) => {
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  // console.log("gameBoard.js console result boardBlocks 3x3:", boardBlocks);
  const [marked, setMarked] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]); //curent player, then when another turn is done when you will change to next player /loop back to the beginning
  const [blockSelected, setBlockSelected] = useState(0);
  // const [blockSelected, setBlockSelected] = useState({ row: "", column: "" });
  const playStateType = {
    win: "win",
    tie: "tie",
    tileShift: "tileShift",
    markSpace: "markSpace",
  };
  const [playState, setPlayState] = useState(playStateType.markSpace); // this wld be the intial playState and this would change each state of the game

  return (
    <section className="game-display-contents">
      <div className="game-board">
        {boardBlocks.map((blocks, index) => {
          return (
            <Block
              block={blocks}
              key={index}
              index={index}
              board={board}
              setBoard={setBoard}
              markPosition={markPosition}
              rotateBlockSelected={rotateBlockSelected}
              setMarked={setMarked}
            />
          ); //this index is the one that was made when I mapped it out
        })}
      </div>
      <div className="detail-and-option-arrow-box">
        {marked ? (
          <div>
            <ArrowButtons />
          </div>
        ) : (
          <div className="current-player-display">Current Player</div>
        )}
      </div>
    </section>
  );
};

export default Gameboard;
