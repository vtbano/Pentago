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
  // rotateBlockSelected,
  setMarked,
  setBlockSelected,
  currentPlayer,
  setCurrentPlayer,
  playState,
  setPlayState,
  playStateType,
}) => {
  const { flatten } = batteries;
  const boardSpaces = flatten(block);
  console.log("block.js console result boardSpaces:", boardSpaces);
  //the shiftblock function just needs boardSpaces[index] then needs to know to shift either left or right
  const [isActive, setActive] = useState(false);
  // const handleToggle = (index) => {
  //   setActive(!isActive);
  // };

  return (
    //this will need to become a button or need to be encapsulated in a button

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
            setMarked={setMarked}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            playState={playState}
            setPlayState={setPlayState}
            playStateType={playStateType}
          />
        );
      })}
    </div>
  );
};

export default Block;
