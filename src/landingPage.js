import React from "react";

const LandingPageButtons = ({ display, setDisplay }) => {
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
        }}
      >
        2 Players
      </button>
      <button
        className="3-player"
        onClick={() => {
          setDisplay(true);
        }}
      >
        3 Players
      </button>
      <button
        className="4-player"
        onClick={() => {
          setDisplay(true);
        }}
      >
        4 Players
      </button>
    </section>
  );
};

export default LandingPageButtons;
