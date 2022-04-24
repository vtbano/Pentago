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
  // setMarked,
  displayContainerState,
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
          //add checkWinner & if statements
          setDisplayContainerState(containerStateType.ActivePlayer);
          setPlayState(playStateType.markSpace);
          nextPlayer(currentPlayer, players);
        }}
      />
      <img
        src="./images/icons8-RightArrow-96.png"
        alt="right arrow button"
        className="right-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 270);
          //add checkWinner & if statements
          setDisplayContainerState(containerStateType.ActivePlayer);
          setPlayState(playStateType.markSpace);
          nextPlayer(currentPlayer, players);
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
