import React from "react";

const LandingPageButtons = ({ setDisplay, setPlayers }) => {
  return (
    <section className="player-option-buttons">
      <img
        src="./images/Pentago-Landingpage-Img.png"
        alt="Pentago Block with 9 spaces tilted"
        className="pentago-landingpage-block"
      />

      <p className="welcome-msg">
        Welcome to the online version of Pentago, the mind twisting game from
        Sweden.
      </p>
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
