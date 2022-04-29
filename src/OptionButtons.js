import React, { useState } from "react";
import MoveHistory from "./MoveHistory.js";
import Rules from "./Rules.js";

const OptionButtons = ({ resetGame, topContainer, moves, handleToggle }) => {
  const [showRules, setShowRules] = useState(false);

  // const [showMoves, setShowMoves] = useState(false);
  return (
    <section className="footer-buttons">
      {showRules && <Rules />}
      {/* {showMoves && <MoveHistory moves={moves} />} */}
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
        onClick={() => {
          setShowRules(!showRules);
          handleToggle();
        }}
      />
      <img
        src="./images/icons8-activity-history-96.png"
        alt="move history button"
        className="history-button"
        // onClick={() => setShowMoves(!showMoves)}
      />
    </section>
  );
};
export default OptionButtons;
