import React from "react";

const TieState = ({
  setTopContainer,
  topContainerDisplay,
  topContainer,
  currentPlayer,
  setDisplay,
  setPlayers,
}) => {
  return (
    <section className="Tie-container">
      <p>TIE GAME</p>
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          setDisplay(false);
          setTopContainer("startGame");
          topContainerDisplay(topContainer, currentPlayer);
          setPlayers([]);
        }}
      />
    </section>
  );
};
export default TieState;
