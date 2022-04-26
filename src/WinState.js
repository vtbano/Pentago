import React from "react";

const WinState = ({
  currentPlayer,
  winPlayer,
  gameResult,
  topContainer,
  setDisplay,
  setPlayers,
}) => {
  return (
    <section className="win-container">
      <p>{winPlayer.name} WINS!</p>
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          console.log("WinState gameResult", gameResult);
          console.log("winPlayer", winPlayer);
          setDisplay(false);
          topContainer();
          console.log("WinState", topContainer());
          setPlayers([]);
        }}
      />
    </section>
  );
};
export default WinState;
