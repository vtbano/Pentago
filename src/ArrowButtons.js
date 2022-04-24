import React from "react";

const ArrowButtons = ({
  board,
  rotateBlockSelected,
  blockSelected,
  setPlayState,
  playStateType,
  players,
  currentPlayer,
  setCurrentPlayer,
  checkWinner,
  setDisplayContainerState,
  containerStateType,
}) => {
  const nextPlayer = (currentPlayer, players) => {
    if (currentPlayer.marker % players.length === 0) {
      return setCurrentPlayer(players[0]);
    } else {
      setCurrentPlayer(players[currentPlayer.marker]);
    }
  };
  return (
    <section className="arrow-buttons">
      <img
        src="./images/icons8-leftArrow-3-96.png"
        alt="left arrow button"
        className="left-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 90);

          const newBoard = rotateBlockSelected(blockSelected, board, 90);

          const resultCheckWinner = checkWinner(newBoard, currentPlayer.marker);
          console.log(
            "result of checkWinner after left rotatation",
            resultCheckWinner
          );
          if (resultCheckWinner === true) {
            setPlayState(playStateType.win);
            setDisplayContainerState(containerStateType.WinState);
            console.log(currentPlayer, "WINS");
          } else if (resultCheckWinner === 0) {
            setPlayState(playStateType.tie);
            setDisplayContainerState(containerStateType.TieState);
            console.log(currentPlayer, "TIE");
          } else if (resultCheckWinner === false) {
            console.log("Change to Mark Space");
            setPlayState(playStateType.markSpace);
            nextPlayer(currentPlayer, players);
            setDisplayContainerState(containerStateType.ActivePlayer);
          }
        }}
      />
      <img
        src="./images/icons8-RightArrow-96.png"
        alt="right arrow button"
        className="right-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 270);

          const newBoard = rotateBlockSelected(blockSelected, board, 270);
          const resultCheckWinner = checkWinner(newBoard, currentPlayer.marker);
          console.log(
            "result of checkWinner after right rotatation",
            resultCheckWinner
          );
          if (resultCheckWinner === true) {
            setPlayState(playStateType.win);
            setDisplayContainerState(containerStateType.WinState);
            console.log(currentPlayer, "WINS");
          } else if (resultCheckWinner === 0) {
            setPlayState(playStateType.tie);
            setDisplayContainerState(containerStateType.TieState);
            console.log(currentPlayer, "TIE");
          } else if (resultCheckWinner === false) {
            console.log("Change to Mark Space");
            setPlayState(playStateType.markSpace);
            nextPlayer(currentPlayer, players);
            setDisplayContainerState(containerStateType.ActivePlayer);
          }
        }}
      />
      <p>
        Select a block to rotate and click which direction you would like the
        block to shift.Clockwise or CounterClockwise
      </p>
    </section>
  );
};
export default ArrowButtons;
