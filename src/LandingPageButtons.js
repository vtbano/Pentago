import React from "react";

const LandingPageButtons = ({ setDisplay, setPlayers, topContainer }) => {
  return (
    <section className="player-option-buttons">
      <div className="landing-page-top-container">{topContainer()}</div>
      <button
        className="two-player"
        onClick={() => {
          setDisplay(true);
          setPlayers([
            {
              name: "Player 1",
              marker: 1,
              img: "./images/icons8-purple-circle-30.png",
            },
            {
              name: "Player 2",
              marker: 2,
              img: "./images/icons8-green-circle-30.png",
            },
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
            {
              name: "Player 1",
              marker: 1,
              img: "./images/icons8-purple-circle-30.png",
            },
            {
              name: "Player 2",
              marker: 2,
              img: "./images/icons8-green-circle-30.png",
            },
            {
              name: "Player 3",
              marker: 3,
              img: "./images/icons8-orange-circle-30.png",
            },
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
            {
              name: "Player 1",
              marker: 1,
              img: "./images/icons8-purple-circle-30.png",
            },
            {
              name: "Player 2",
              marker: 2,
              img: "./images/icons8-green-circle-30.png",
            },
            {
              name: "Player 3",
              marker: 3,
              img: "./images/icons8-orange-circle-30.png",
            },
            {
              name: "Player 4",
              marker: 4,
              img: "./images/icons8-pink-circle-30.png",
            },
          ]);
        }}
      >
        4 Players
      </button>
    </section>
  );
};

export default LandingPageButtons;
