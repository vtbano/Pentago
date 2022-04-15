import React, { useState } from "react";
import boardArray from "./boardArray.js";
import { batteries } from "./batteries.js";
import Block from "./block.js";

const Gameboard = () => {
  const [board, setBoard] = useState(boardArray);
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  console.log("gameBoard.js console result:", boardBlocks);

  // const [currentPlayer, setCurrentPlayer] = useState({ name: "", number: "" });
  // const [players, setPlayers] = useState[{}];

  // const [marked, setMarked] = useState({});
  // const [blockSelected, setBlockSelected] = useState({ row: "", column: "" });

  return (
    <div className="game-board">
      {boardBlocks.map((blocks, index) => {
        return <Block block={blocks} key={index} index={index} />; //this index is the one that was made when I mapped it out
      })}
    </div>
  );
};

export default Gameboard;
