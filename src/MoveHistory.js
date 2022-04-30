import React from "react";

const MoveHistory = ({ moves }) => {
  return (
    <div className="moves-container">
      <div className="moves-title">Move History</div>
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
