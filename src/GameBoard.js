import React, { useState } from "react";
import { batteries } from "./batteries.js";
import boardArray from "./boardArray.js";
import ArrowButtons from "./ArrowButtons.js";
import Block from "./Block.js";

const { flatten, range } = batteries;

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

  const elementsIndex = (arr, elem) => {
    return arr.reduce((finalArray, val, idx) => {
      return elem === val ? finalArray.concat(idx) : finalArray;
    }, []);
  };

  // this function will return whether the numbers in the row are consecutive
  const indexDiff = (rowIndexArray) => {
    return rowIndexArray.slice(1).every((x, i) => x - rowIndexArray[i] === 1);
  };

  const newRows = (indexofRow, board) => {
    return indexofRow.map((index) =>
      flatten(
        board[Math.floor(index / board.length)].map(
          (block) => block[index % block.length]
        )
      )
    );
  };

  const flattenBoardRows = (board) => {
    const numRows = board.length * board[0].length;
    const indexofRow = range(0, numRows - 1);
    return newRows(indexofRow, board);
  };

  const checkWinner = (board, marker) => {
    const boardFlattened9Rows = flattenBoardRows(board);
    const boardFlattened9Cols = flattenBoardRows(rot90(board));
    const boardFlattenedDiag = flatten(diagonalRows(board));
    const isTrue = (x) => x === true;
    if (fiveMarkersWin(boardFlattened9Rows, marker).some(isTrue)) {
      return true, console.log("horizontal win");
    } else if (fiveMarkersWin(boardFlattened9Cols, marker).some(isTrue)) {
      return true, console.log("vertical win"); //must insert diaganol check
    } else if (fiveMarkersWin(boardFlattenedDiag, marker).some(isTrue)) {
      return true, console.log("diagonal win");
    } else {
      return false, console.log("Tie, no one wins");
    }
  };

  const fiveMarkersWin = (boardFlattened, symbol) => {
    return boardFlattened.map((arr, index) => {
      arr = elementsIndex(arr, symbol);
      if (arr.length >= 5) {
        return indexDiff(arr);
      } else {
        return false;
      }
    });
  };

  //this function takes the board given and returns the top left of the board all the way to the halfway point
  const topLeftDiag = (indexofRow, rows) =>
    indexofRow.map((firstY) => {
      const ys = range(0, firstY).reverse(); //[2,1,0]
      return ys.map((y, x) => rows[y][x]);
    });

  //this function returns all the diagonal rows from starting from each corner of the board
  const diagonalRows = (board) => {
    const boardRot90 = rot90(board);
    const boardRot180 = rot90(boardRot90);
    const boardRot270 = rot90(boardRot180);

    const rows = flattenBoardRows(board);
    const rows1 = flattenBoardRows(boardRot90);
    const rows2 = flattenBoardRows(boardRot180);
    const rows3 = flattenBoardRows(boardRot270);

    const numRows = board.length * board[0].length;
    const indexofRow = range(0, numRows - 1);

    return [
      topLeftDiag(indexofRow, rows),
      topLeftDiag(indexofRow, rows1),
      topLeftDiag(indexofRow, rows2),
      topLeftDiag(indexofRow, rows3),
    ];
  };

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
      return markPosition(marker, blockIndex, board, SpaceIndex);
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
              // rotateBlockSelected={rotateBlockSelected}
              setMarked={setMarked}
              setBlockSelected={setBlockSelected}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              playState={playState}
              setPlayState={setPlayState}
              playStateType={playStateType}
              checkWinner={checkWinner}
            />
          ); //this index is the one that was made when I mapped it out
        })}
      </div>
      <div className="detail-and-option-arrow-box">
        {marked ? (
          <div>
            <ArrowButtons
              board={board}
              rotateBlockSelected={rotateBlockSelected}
              blockSelected={blockSelected}
              setPlayState={setPlayState}
              playStateType={playStateType}
              players={players}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              setMarked={setMarked}
              checkWinner={checkWinner}
            />
          </div>
        ) : (
          <div className="instruction-and-player">
            <div className="current-player-display">{currentPlayer.name}</div>
            <p>Mark a space</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gameboard;
