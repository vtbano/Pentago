import React from "react";
// import { flatten } from "./batteries.js";

const Space = ({
  spaceSet,
  blockIndex,
  spaceIndex,
  board,
  setBoard,
  markPosition,
  setMarked,
  currentPlayer,
  setCurrentPlayer,
  playState,
  setPlayState,
  playStateType,
}) => {
  return (
    <div className="space">
      <button
        className="space-button"
        onClick={(e) => {
          e.preventDefault();
          if (playState === playStateType.markSpace) {
            markPosition(
              currentPlayer.marker,
              blockIndex,
              board,
              spaceIndex,
              setBoard
            );
            setMarked(true);
            setPlayState(playStateType.tileShift);
          }
        }}
      >
        {spaceSet}
        {/* {console.log("block Index:", blockIndex)}
        {console.log("space Index", spaceIndex)} */}
      </button>
    </div>
  );
};

export default Space;
