import React from "react";

const MoveHistory = ({ moves }) => {
  return (
    <div className="moves-container">
      <div className="moves-title">MOVE HISTORY</div>
      <img
        src="./images/BlockOrder.png"
        alt="Display how to read the order of the blocks"
        className="block-space-order-img"
      />
      {moves.map((singleMove) => {
        const { id, move } = singleMove;
        return (
          <p className="moves-update" key={id}>
            {move}
          </p>
        );
      })}
    </div>
  );
};
export default MoveHistory;
