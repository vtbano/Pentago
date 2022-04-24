import React from "react";

const Space = ({
  spaceSet,
  blockIndex,
  spaceIndex,
  board,
  setBoard,
  markPosition,
  setMarked,
  currentPlayer,
  playState,
  setPlayState,
  playStateType,
  checkWinner,
  displayContainerState,
  setDisplayContainerState,
  containerStateType,
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
              console.log(currentPlayer, "WINS");
            } else if (resultCheckWinner === 0) {
              setPlayState(playStateType.tie);
              setDisplayContainerState(containerStateType.TieState);
              console.log(currentPlayer, "TIE");
            } else if (resultCheckWinner === false) {
              setDisplayContainerState(containerStateType.ArrowButtons);
              setPlayState(playStateType.tileShift);
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
