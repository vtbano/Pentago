import React from "react";
import { batteries } from "./batteries.js";
import Space from "./Space.js";
import "./App.css";

const Block = ({
  block,
  index,
  board,
  setBoard,
  markPosition,
  // setMarked,
  setBlockSelected,
  blockSelected,
  players,
  currentPlayer,
  setCurrentPlayer,
  playState,
  setPlayState,
  playStateType,
  checkWinner,
  displayContainerState,
  setDisplayContainerState,
  containerStateType,
  setGameResult,
  setWinPlayer,
  setMoves,
}) => {
  const { flatten } = batteries;
  const boardSpaces = flatten(block);
  // console.log("block.js console result boardSpaces:", boardSpaces);

  return (
    <div
      className={blockSelected === index ? "choose-block" : "block"}
      onClick={(e) => {
        e.preventDefault();

        if (playState === playStateType.tileShift) {
          return setBlockSelected(index);
        }
      }}
    >
      {boardSpaces.map((spaceSet, spaceIndex) => {
        return (
          <Space
            spaceSet={spaceSet}
            blockIndex={index}
            key={spaceIndex}
            spaceIndex={spaceIndex}
            board={board}
            setBoard={setBoard}
            markPosition={markPosition}
            // setMarked={setMarked}
            players={players}
            currentPlayer={currentPlayer}
            playState={playState}
            setPlayState={setPlayState}
            playStateType={playStateType}
            checkWinner={checkWinner}
            displayContainerState={displayContainerState}
            setDisplayContainerState={setDisplayContainerState}
            containerStateType={containerStateType}
            setGameResult={setGameResult}
            setWinPlayer={setWinPlayer}
            setMoves={setMoves}
          />
        );
      })}
    </div>
  );
};

export default Block;
