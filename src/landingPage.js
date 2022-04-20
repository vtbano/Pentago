import React from "react";

const LandingPageButtons = ({ setDisplay }) => {
  return (
    <section className="player-option-buttons">
      <div>PICTURE PLACEHOLDER</div>
      <p className="welcome-msg">
        Welcome to the online version of Pentago, the mind twisting game from
        Sweden.
      </p>
      <button
        className="2-player"
        onClick={() => {
          setDisplay(true);
          // setPlayers([
          //   { name: "Player 1", number: 1 },
          //   { name: "Player 2", number: 2 },
          // ]);
        }}
      >
        2 Players
      </button>
      <button
        className="3-player"
        onClick={() => {
          setDisplay(true);
          // setPlayers([
          //   { name: "Player 1", number: 1 },
          //   { name: "Player 2", number: 2 },
          //   { name: "Player 3", number: 3 },
          // ]);
        }}
      >
        3 Players
      </button>
      <button
        className="4-player"
        onClick={() => {
          setDisplay(true);
          // setPlayers([
          //   { name: "Player 1", number: 1 },
          //   { name: "Player 2", number: 2 },
          //   { name: "Player 3", number: 3 },
          //   { name: "Player 4", number: 4 },
          // ]);
        }}
      >
        4 Players
      </button>
    </section>
  );
};

export default LandingPageButtons;
