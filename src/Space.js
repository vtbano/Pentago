import React from "react";
import gameResultType from "./gameResultType.js";

const Space = ({
  spaceSet,
  blockIndex,
  spaceIndex,
  board,
  setBoard,
  markPosition,
  players,
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
  // const { name, marker, img } = players;
  // const displayMarker = (spaceSet) => {
  //   if (spaceSet === 0) {
  //     return spaceSet;
  //   } else if (spaceSet === 1) {
  //     return players[0]
  //   } else if (spaceSet === 2) {
  //     return players[1].img;
  //   } else if (spaceSet === 3) {
  //     return players[2].img;
  //   } else if (spaceSet === 4) {
  //     return players[3].img;
  //   }
  // };
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
        {/* {displayMarker(spaceSet)} */}
        {spaceSet}
      </button>
    </div>
  );
};

export default Space;
