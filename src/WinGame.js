import React from "react";

const WinGame = ({ winPlayer }) => {
  return (
    <div className="top-container">
      <div className="text-and-background-display">
        <img
          src="./images/Pentago-and-Trophy-Background.png"
          alt="Winner display and trophy"
          className="pentago-and-trophy"
        />
        <div className="winner-shoutOut">
          PENTAGO
          <p>CHAMP </p>
          <p>{winPlayer.name}</p>
        </div>
      </div>

      <p className="winning-play-again-msg">
        How many people want to challenge the PentaGo Champ? Initiate Challenge
        Below
      </p>
    </div>
  );
};
export default WinGame;
