import React from "react";

const ActivePlayer = ({ currentPlayer }) => {
  if (currentPlayer) {
    return (
      <div className="current-player-display">
        {currentPlayer.name}
        <p>Mark a space</p>
      </div>
    );
  } else return;
};
export default ActivePlayer;
