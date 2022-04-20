import React from "react";

const Space = ({ spaceSet, blockIndex, key, spaceIndex }) => {
  return (
    <div className="space">
      <button className="space-button">
        {spaceSet} {console.log(blockIndex)} {console.log(spaceIndex)}
      </button>
    </div>
  );
};

export default Space;
