import React from "react";

const OptionButtons = ({ resetGame }) => {
  return (
    <section className="footer-buttons">
      <img
        src="./images/icons8-reset-96.png"
        alt="restart button"
        className="restart-button"
        onClick={() => {
          resetGame();
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
