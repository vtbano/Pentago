import React from "react";

const LandingPageButtons = ({
  setDisplay,
  setPlayers,
  topContainerDisplay,
  topContainer,
}) => {
  return (
    <section className="player-option-buttons">
      <div className="landing-page-top-container">
        {topContainerDisplay(topContainer)}
      </div>
      <button
        className="two-player"
        onClick={() => {
          setDisplay(true);
          setPlayers([
            { name: "Player 1", marker: 1 },
            { name: "Player 2", marker: 2 },
          ]);
        }}
      >
        2 Players
      </button>
      <button
        className="three-player"
        onClick={() => {
          setDisplay(true);
          setPlayers([
            { name: "Player 1", marker: 1 },
            { name: "Player 2", marker: 2 },
            { name: "Player 3", marker: 3 },
          ]);
        }}
      >
        3 Players
      </button>
      <button
        className="four-player"
        onClick={() => {
          setDisplay(true);
          setPlayers([
            { name: "Player 1", marker: 1 },
            { name: "Player 2", marker: 2 },
            { name: "Player 3", marker: 3 },
            { name: "Player 4", marker: 4 },
          ]);
        }}
      >
        4 Players
      </button>
    </section>
  );
};

export default LandingPageButtons;
