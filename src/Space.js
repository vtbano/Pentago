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
  moves,
  setMoves,
}) => {
  const displayMarker = (spaceSet) => {
    if (spaceSet === 0) {
      return spaceSet;
    } else if (spaceSet === 1) {
      return (
        <img
          src="./images/icons8-purple-circle-30.png"
          className="marker-1"
          alt="purple marker"
        />
      );
    } else if (spaceSet === 2) {
      return (
        <img
          src="./images/icons8-green-circle-30.png"
          className="marker-2"
          alt="green marker"
        />
      );
    } else if (spaceSet === 3) {
      return (
        <img
          src="./images/icons8-orange-circle-30.png"
          className="marker-3"
          alt="orange marker"
        />
      );
    } else if (spaceSet === 4) {
      return (
        <img
          src="./images/icons8-pink-circle-30.png"
          className="marker-4"
          alt="pink marker"
        />
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
              setMoves([
                ...moves,
                {
                  id: new Date().getTime().toString(),
                  move: `WINNING MOVE: ${currentPlayer.name} marked space ${
                    spaceIndex + 1
                  } on block ${blockIndex + 1}`,
                },
              ]);
              console.log(currentPlayer, "WINS");
              return currentPlayer;
            } else if (resultCheckWinner === 0) {
              setPlayState(playStateType.tie);
              setDisplayContainerState(containerStateType.TieState);
              setGameResult(gameResultType.Tie);
              setMoves([
                ...moves,
                {
                  id: new Date().getTime().toString(),
                  move: `LAST MOVE TO TIE: ${currentPlayer.name} marked space ${
                    spaceIndex + 1
                  } on block ${blockIndex + 1}`,
                },
              ]);
              console.log(currentPlayer, "TIE");
            } else if (resultCheckWinner === false) {
              setPlayState(playStateType.tileShift);
              setDisplayContainerState(containerStateType.ArrowButtons);
              setMoves([
                ...moves,
                {
                  id: new Date().getTime().toString(),
                  move: `${currentPlayer.name} marked space ${
                    spaceIndex + 1
                  } on block ${blockIndex + 1}`,
                },
              ]);
            }
          }
        }}
      >
        {displayMarker(spaceSet)}
      </button>
    </div>
  );
};

export default Space;
