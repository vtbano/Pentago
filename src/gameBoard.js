import React, { useState } from "react";
import boardArray from "./boardArray.js";
import { batteries } from "./batteries.js";
import Block from "./block.js";

const Gameboard = () => {
  const [board, setBoard] = useState(boardArray);
  const { flatten } = batteries;
  const boardBlocks = flatten(boardArray);
  // const [currentPlayer, setCurrentPlayer] = useState({ name: "", number: "" });
  // const [players, setPlayers] = useState[{}];

  // const [marked, setMarked] = useState({});
  // const [blockSelected, setBlockSelected] = useState({ row: "", column: "" });

  return (
    <div className="game-board">
      {boardBlocks.map((blocks, index) => {
        return <Block board={board} key={index} />;
      })}
    </div>
  );
};

export default Gameboard;
