import React from "react";

const ArrowButtons = ({ board, rotateBlockSelected, blockSelected }) => {
  return (
    <section className="arrow-buttons">
      <img
        src="./images/icons8-leftArrow-3-96.png"
        alt="left arrow button"
        className="left-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 270);
          //add setPlayState
        }}
      />
      <img
        src="./images/icons8-RightArrow-96.png"
        alt="right arrow button"
        className="right-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 90);
          //add setPlayState
        }}
      />
      <p>
        Select a block to rotate and click which direction you would like the
        block to shift.Clockwise or CounterClockwise
      </p>
    </section>
  );
};
export default ArrowButtons;
