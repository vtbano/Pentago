import React, { useState } from "react";
import Rules from "./Rules.js";

const OptionButtons = ({ resetGame, topContainer }) => {
  const [showRules, setShowRules] = useState(false);
  return (
    <section className="footer-buttons">
      {showRules && <Rules />}
      <img
        src="./images/icons8-reset-96.png"
        alt="restart button"
        className="restart-button"
        onClick={() => {
          topContainer();
          resetGame();
        }}
      />
      <img
        src="./images/icons8-puzzled-96.png"
        alt="Rules button"
        className="rules-button"
        onClick={() => setShowRules(!showRules)}
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
