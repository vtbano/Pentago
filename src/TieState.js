import React from "react";

const TieState = ({ topContainer, setDisplay, setPlayers }) => {
  return (
    <section className="tie-container">
      <div>TIE GAME</div>
      <div>
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
      </div>
    </section>
  );
};
export default TieState;
