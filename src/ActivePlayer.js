import React from "react";

const ActivePlayer = ({ currentPlayer }) => {
  return (
    <div className="current-player-display">
      {currentPlayer.name}
      <p>Mark a space</p>
    </div>
  );
};
export default ActivePlayer;
