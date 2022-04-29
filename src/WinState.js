import React from "react";

const WinState = ({
  winPlayer,
  gameResult,
  topContainer,
  setDisplay,
  setPlayers,
}) => {
  return (
    <section className="win-container">
      <div>
        {winPlayer.name} WINS!
        <div>
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
        </div>
      </div>
    </section>
  );
};
export default WinState;
