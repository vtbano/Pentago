import React from "react";

const TieState = ({ currentPlayer }) => {
  return (
    <section className="Tie-container">
      <p>TIE GAME</p>
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
export default TieState;
