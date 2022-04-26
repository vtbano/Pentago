import React from "react";

const WinGame = ({ winPlayer }) => {
  return (
    <div className="top-container">
      <img
        src="./images/Pentago-and-Trophy-Background.png"
        alt="Winner display and trophy"
        className="pentago-and-trophy"
      />
      <div className="winner-shoutOut">
        PENTAGO CHAMP
        <p>{winPlayer.name}</p>
      </div>

      <p className="winning-play-again-msg">
        How many people want to challenge the PentaGo Champ? Initiate Challenge
        Below
      </p>
    </div>
  );
};
export default WinGame;
