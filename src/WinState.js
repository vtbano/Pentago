import React from "react";

const WinState = ({ currentPlayer }) => {
  return (
    <section className="win-container">
      <p>{currentPlayer} WINS!</p>
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          // NEW COMPONENT
        }}
      />
    </section>
  );
};
export default WinState;
