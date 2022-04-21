import React from "react";
// import { flatten } from "./batteries.js";

const Space = ({
  spaceSet,
  blockIndex,
  spaceIndex,
  board,
  setBoard,
  markPosition,
}) => {
  return (
    <div className="space">
      <button
        className="space-button"
        onClick={() => {
          markPosition(5, blockIndex, board, spaceIndex, setBoard);
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
