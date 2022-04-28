import React from "react";

const MoveHistory = ({ moves }) => {
  return (
    <div className="moves-container">
      <div className="moves-title">Move History</div>
      <p>{moves}</p>
    </div>
  );
};
export default MoveHistory;
