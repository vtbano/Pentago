import React from "react";
import gameResultType from "./gameResultType.js";

const Space = ({
  spaceSet,
  blockIndex,
  spaceIndex,
  board,
  setBoard,
  markPosition,
  currentPlayer,
  playState,
  setPlayState,
  playStateType,
  checkWinner,
  setDisplayContainerState,
  containerStateType,
  setGameResult,
  setWinPlayer,
  setMoves,
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

            const newBoard = markPosition(
              currentPlayer.marker,
              blockIndex,
              board,
              spaceIndex,
              setBoard
            );

            const resultCheckWinner = checkWinner(
              newBoard,
              currentPlayer.marker
            );
            console.log("result of checkWinner", resultCheckWinner);
            if (resultCheckWinner === true) {
              setPlayState(playStateType.win);
              setDisplayContainerState(containerStateType.WinState);
              setGameResult(gameResultType.Win);
              setWinPlayer(currentPlayer);
              console.log(currentPlayer, "WINS");
              return currentPlayer;
            } else if (resultCheckWinner === 0) {
              setPlayState(playStateType.tie);
              setDisplayContainerState(containerStateType.TieState);
              setGameResult(gameResultType.Tie);
              console.log(currentPlayer, "TIE");
            } else if (resultCheckWinner === false) {
              setPlayState(playStateType.tileShift);
              setDisplayContainerState(containerStateType.ArrowButtons);
              setMoves({
                ...currentPlayer,
                moves: `Marked on Block${blockIndex} Space${spaceIndex}`,
              });
            }
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
