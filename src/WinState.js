import React from "react";
import App from "./App.js";

const WinState = ({
  currentPlayer,
  setTopContainer,
  topContainerDisplay,
  topContainer,
  setDisplay,
  setPlayers,
}) => {
  return (
    <section className="win-container">
      {/* <p>{currentPlayer.name} WINS!</p> */}
      <img
        src="./images/icons8-playAgainGold.png"
        alt="next button"
        className="next-button"
        onClick={() => {
          return (
            <App
              setDisplay={setDisplay(false)}
              setTopContainer={setTopContainer("winGame")}
              topContainerDisplay={topContainerDisplay(topContainer)}
              setPlayers={setPlayers([])}
            />
          );
        }}
      />
    </section>
  );
};
export default WinState;
