import React from "react";
import { batteries } from "./batteries.js";
import Space from "./Space.js";

const Block = ({
  block,
  index,
  board,
  setBoard,
  markPosition,
  rotateBlockSelected,
  setMarked,
  currentPlayer,
  setCurrentPlayer,
  playState,
  setPlayState,
}) => {
  const { flatten } = batteries;
  const boardSpaces = flatten(block);
  console.log("block.js console result boardSpaces:", boardSpaces);
  //the shiftblock function just needs boardSpaces[index] then needs to know to shift either left or right
  return (
    //this will need to become a button or need to be encapsulated in a button
    <div
      className="block"
      // onClick={() => rotateBlockSelected(index, board, 270)}
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
          />
        );
      })}
    </div>
  );
};

export default Block;
