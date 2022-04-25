import React from "react";
import WinGame from "./WinGame.js";

const WinState = ({
  currentPlayer,
  setTopContainer,
  topContainerDisplay,
  topContainer,
  setDisplay,
  setPlayers,
  // WinGame,
}) => {
  return (
    <section className="win-container">
      <p>{currentPlayer.name} WINS!</p>
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          setDisplay(false);
          setTopContainer("winGame");
          topContainerDisplay(topContainer, currentPlayer);
          setPlayers([]);
          return <WinGame currentPlayer={currentPlayer} />;
        }}
      />
    </section>
  );
};
export default WinState;
