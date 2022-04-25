import React from "react";
import App from "./App.js";

const TieState = ({
  setTopContainer,
  topContainerDisplay,
  topContainer,
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
          //   return (
          //   setDisplay(false);
          //   setTopContainer("startGame");
          //   topContainerDisplay(topContainer);
          //   setPlayers([]);
          //   // <App />)
          //   )
        }}
      />
    </section>
  );
};
export default TieState;
