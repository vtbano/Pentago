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
  const displayMarker = (spaceSet) => {
    if (spaceSet === 0) {
      return spaceSet;
    } else if (spaceSet === 1) {
      return (
        <img src="./images/icons8-purple-circle-30.png" className="marker-1" />
      );
    } else if (spaceSet === 2) {
      return (
        <img src="./images/icons8-green-circle-30.png" className="marker-2" />
      );
    } else if (spaceSet === 3) {
      return (
        <img src="./images/icons8-orange-circle-30.png" className="marker-3" />
      );
    } else if (spaceSet === 4) {
      return (
        <img src="./images/icons8-pink-circle-30.png" className="marker-4" />
      );
    }
  };
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
            }
            // setMoves({
            //   ...currentPlayer,
            //   move: `Marked on Block ${blockIndex} Space ${spaceIndex}`,
            // });
          }
        }}
      >
        {displayMarker(spaceSet)}
      </button>
    </div>
  );
};

export default Space;
