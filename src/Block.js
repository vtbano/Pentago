import React, { useState } from "react";
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
  currentPlayer,
  setCurrentPlayer,
  playState,
  setPlayState,
  playStateType,
  checkWinner,
  displayContainerState,
  setDisplayContainerState,
  containerStateType,
}) => {
  const { flatten } = batteries;
  const boardSpaces = flatten(block);
  // console.log("block.js console result boardSpaces:", boardSpaces);
  const [isActive, setActive] = useState(false);
  // const handleToggle = (index) => {
  //   setActive(!isActive);
  // };

  return (
    <div
      className={isActive ? "choose-block" : "block"}
      onClick={(e) => {
        e.preventDefault();

        if (playState === playStateType.tileShift) {
          setActive(true);
          // {
          //   handleToggle(index); // Fix the toggle so that it removes the class from the previous index
          // }
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
            currentPlayer={currentPlayer}
            playState={playState}
            setPlayState={setPlayState}
            playStateType={playStateType}
            checkWinner={checkWinner}
            displayContainerState={displayContainerState}
            setDisplayContainerState={setDisplayContainerState}
            containerStateType={containerStateType}
          />
        );
      })}
    </div>
  );
};

export default Block;
