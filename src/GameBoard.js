import React, { useState } from "react";
import { batteries } from "./batteries.js";
import boardArray from "./boardArray.js";
import ArrowButtons from "./ArrowButtons.js";
import Block from "./Block.js";

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

const rot90 = (block) =>
  block[0].map((val, index) => {
    return block
      .map((row) => {
        if (Array.isArray(row[index])) {
          return rot90(row[index]);
        } else {
          return row[index];
        }
      })
      .reverse();
  });

const Gameboard = ({ players }) => {
  const [board, setBoard] = useState(boardArray);
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  // console.log("gameBoard.js console result boardBlocks 3x3:", boardBlocks);
  const [marked, setMarked] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]); //curent player, then when another turn is done when you will change to next player /loop back to the beginning
  const [blockSelected, setBlockSelected] = useState(0);

  const playStateType = {
    win: "win",
    tie: "tie",
    tileShift: "tileShift",
    markSpace: "markSpace",
  };
  const [playState, setPlayState] = useState(playStateType.markSpace); // this wld be the intial playState and this would change each state of the game

  const markPosition = (marker, blockIndex, board, SpaceIndex) => {
    const boardBlocks = flatten(board);
    // console.log("board blocks:", boardBlocks);

    const boardSpaces = createFlatBoardSpaces(boardBlocks);
    if (boardSpaces[blockIndex][SpaceIndex] === 0) {
      boardSpaces[blockIndex][SpaceIndex] = marker;
      // console.log("board Spaces:", boardSpaces);
      const newBoardBlocks = recreateBoardBlocks(boardSpaces);
      // console.log("new board blocks:", newBoardBlocks);
      const newBoard = recreateBoardArray(newBoardBlocks);
      console.log("NEW BOARD:", newBoard[0], newBoard[1], newBoard[2]);
      return setBoard(newBoard);
    } else if (boardSpaces[blockIndex][SpaceIndex] > 0) {
      return alert("already taken");
    }
  };

  const rotateBlockSelected = (blockIndex, board, direction) => {
    const boardBlocks = flatten(board);
    console.log("board blocks:", boardBlocks[0]);

    if (direction === 90) {
      boardBlocks[blockIndex] = rot90(boardBlocks[blockIndex]);
      const newBoard = recreateBoardArray(boardBlocks);

      return setBoard(newBoard);
    } else if (direction === 270) {
      boardBlocks[blockIndex] = rot90(rot90(rot90(boardBlocks[blockIndex])));
      const newBoard = recreateBoardArray(boardBlocks);

      return setBoard(newBoard);
    }
  };

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
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              playState={playState}
              setPlayState={setPlayState}
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
          <div className="current-player-display">{currentPlayer.name}</div>
        )}
      </div>
    </section>
  );
};

export default Gameboard;
