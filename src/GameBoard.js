import React, { useState } from "react";
import { batteries } from "./batteries.js";
import boardArray from "./boardArray.js";
import Block from "./Block.js";
import ArrowButtons from "./ArrowButtons.js";
import ActivePlayer from "./ActivePlayer";
import WinState from "./WinState.js";
import TieState from "./TieState.js";

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

const Gameboard = ({
  players,
  setPlayers,
  topContainerDisplay,
  setDisplay,
  setGameResult,
  gameResult,
  setWinPlayer,
  winPlayer,
  moves,
  setMoves,
}) => {
  const [board, setBoard] = useState(boardArray);
  const { flatten } = batteries;
  const boardBlocks = flatten(board);
  // console.log("gameBoard.js console result boardBlocks 3x3:", boardBlocks);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]); //curent player, then when another turn is done when you will change to next player /loop back to the beginning
  const [blockSelected, setBlockSelected] = useState(0);

  const playStateType = {
    win: "win",
    tie: "tie",
    tileShift: "tileShift",
    markSpace: "markSpace",
  };

  const containerStateType = {
    ArrowButtons: "ArrowButtons",
    TieState: "TieState",
    WinState: "WinState",
    ActivePlayer: "ActivePlayer",
  };
  const [playState, setPlayState] = useState(playStateType.markSpace); // this wld be the intial playState and this would change each state of the game
  const [displayContainerState, setDisplayContainerState] = useState(
    containerStateType.ActivePlayer
  );

  // const handleMovesOnClick = (
  //   currentPlayer,
  //   playStateType,
  //   blockSelected,
  //   SpaceIndex
  // ) => {
  //   const newMove = {
  //     id: new Date().getTime().toString(),
  //     playerName: currentPlayer.name,
  //     movePlayState: playStateType,
  //     blockSelected: blockSelected,
  //     SpaceIndex: SpaceIndex,
  //   };
  // setMoves([...moves, newMove]);
  // console.log(setMoves([...moves, newMove]));
  // };

  //this funtion will return the index of the element identified. Elements are indentified by a number (1,2,3,4)
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
  //this function checks if the board is full
  const fullBoard = (board) => {
    const flattenBoard1arr = flatten(flatten(flatten(board)));
    return flattenBoard1arr.every((space) => space !== 0);
  };

  //this function measures whether the number of the same elements return is >=5 (i.e. the symbol 1 showed up 5 times in an array of 9).
  //if it does then it checks whether it is 5 in a row by calling indexDiff otherwise, its false since there isn't 5 consecutive elements in a row
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

  //this function checks if there is a winner
  const checkWinner = (board, marker) => {
    const boardFlattened9Rows = flattenBoardRows(board);
    const boardFlattened9Cols = flattenBoardRows(rot90(board));
    const boardFlattenedDiag = flatten(diagonalRows(board));
    const isTrue = (x) => x === true;
    if (fiveMarkersWin(boardFlattened9Rows, marker).some(isTrue)) {
      return true; //horizontal win
    } else if (fiveMarkersWin(boardFlattened9Cols, marker).some(isTrue)) {
      return true; //vertical win
    } else if (fiveMarkersWin(boardFlattenedDiag, marker).some(isTrue)) {
      return true; //diagonal win
    } else if (fullBoard(board)) {
      return 0; //tie
    } else {
      return false; //cont' game
    }
  };

  //this function marks a position on the board in the Space component
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
      // console.log("NEW BOARD:", newBoard[0], newBoard[1], newBoard[2]);
      setBoard(newBoard);
      return newBoard;
    } else if (boardSpaces[blockIndex][SpaceIndex] > 0) {
      return markPosition(marker, blockIndex, board, SpaceIndex);
    }
  };

  //this function rotates the block selected in the ArrowButtons component
  const rotateBlockSelected = (blockIndex, board, direction) => {
    const boardBlocks = flatten(board);
    // console.log("board blocks:", boardBlocks[0]);

    if (direction === 90) {
      boardBlocks[blockIndex] = rot90(boardBlocks[blockIndex]);
      const newBoard = recreateBoardArray(boardBlocks);
      setBoard(newBoard);
      return newBoard;
    } else if (direction === 270) {
      boardBlocks[blockIndex] = rot90(rot90(rot90(boardBlocks[blockIndex])));
      const newBoard = recreateBoardArray(boardBlocks);
      setBoard(newBoard);
      return newBoard;
    }
  };

  //this function determines what display should show up. Show it say who the active player is, should it give the option to rotate the board, OR
  //should it state whether there is a winner or a tie and provide an option button to select to the next screen
  const displayContainer = (displayContainerState) => {
    if (displayContainerState === "ActivePlayer") {
      return <ActivePlayer currentPlayer={currentPlayer} />;
    } else if (displayContainerState === "ArrowButtons") {
      return (
        <ArrowButtons
          board={board}
          rotateBlockSelected={rotateBlockSelected}
          blockSelected={blockSelected}
          setPlayState={setPlayState}
          playStateType={playStateType}
          players={players}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          checkWinner={checkWinner}
          setDisplayContainerState={setDisplayContainerState}
          containerStateType={containerStateType}
          setGameResult={setGameResult}
          setWinPlayer={setWinPlayer}
          moves={moves}
          setMoves={setMoves}
        />
      );
    } else if (displayContainerState === "WinState") {
      return (
        <WinState
          winPlayer={winPlayer}
          gameResult={gameResult}
          topContainer={() => topContainerDisplay(gameResult, winPlayer)}
          setDisplay={setDisplay}
          setPlayers={setPlayers}
        />
      );
    } else if (displayContainerState === "TieState") {
      return (
        <TieState
          topContainer={() => topContainerDisplay(gameResult, winPlayer)}
          setDisplay={setDisplay}
          setPlayers={setPlayers}
        />
      );
    }
  };

  return (
    <section className="game-display-contents">
      <div className="game-board">
        {boardBlocks.map((blocks, index) => {
          //this index is the one that was made when I mapped it out
          return (
            <Block
              block={blocks}
              key={index}
              index={index}
              board={board}
              setBoard={setBoard}
              markPosition={markPosition}
              setBlockSelected={setBlockSelected}
              blockSelected={blockSelected}
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
              moves={moves}
              setMoves={setMoves}
            />
          );
        })}
      </div>
      <div className="additional-detail-box">
        {displayContainer(displayContainerState)}
      </div>
    </section>
  );
};

export default Gameboard;
