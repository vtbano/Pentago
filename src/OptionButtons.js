import React from "react";
import App from "./App";

const OptionButtons = (
  setDisplay,
  setPlayers,
  setTopContainer,
  topContainerDisplay,
  topContainer
) => {
  return (
    <section className="footer-buttons">
      <img
        src="./images/icons8-reset-96.png"
        alt="restart button"
        className="restart-button"
        onClick={() => {
          setDisplay(false);
          setTopContainer("startGame");
          topContainerDisplay(topContainer);
          setPlayers([]);

          // <App
          //   setDisplay={setDisplay(false)}
          //   setTopContainer={setTopContainer("startGame")}
          //   topContainerDisplay={topContainerDisplay(topContainer)}
          //   setPlayers={setPlayers([])}
          // />
          // );
        }}
      />
      <img
        src="./images/icons8-puzzled-96.png"
        alt="Rules button"
        className="rules-button"
      />
      <img
        src="./images/icons8-activity-history-96.png"
        alt="move history button"
        className="history-button"
      />
    </section>
  );
};
export default OptionButtons;
