import React from "react";

const TieState = ({ topContainer, setDisplay, setPlayers }) => {
  return (
    <section className="Tie-container">
      <p>TIE GAME</p>
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          setDisplay(false);
          topContainer();
          setPlayers([]);
        }}
      />
    </section>
  );
};
export default TieState;
