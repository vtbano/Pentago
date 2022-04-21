import React from "react";
import { batteries } from "./batteries.js";
import Block from "./block.js";

const Gameboard = ({ board, setBoard, markPosition }) => {
  // const [board, setBoard] = useState(boardArray);
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  console.log("gameBoard.js console result boardBlocks 3x3:", boardBlocks);

  // const [marked, setMarked] = useState({});
  // const [blockSelected, setBlockSelected] = useState({ row: "", column: "" });

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
            />
          ); //this index is the one that was made when I mapped it out
        })}
      </div>
      <div className="current-player-display">Current Player</div>
    </section>
  );
};

export default Gameboard;
