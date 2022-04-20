import React from "react";
import { batteries } from "./batteries.js";
import Space from "./space.js";

const Block = ({ block, index }) => {
  const { flatten } = batteries;
  const boardSpaces = flatten(block);
  console.log("block.js console result:", boardSpaces);
  return (
    //this will need to become a button or need to be encapsulated in a button
    <div className="block">
      {boardSpaces.map((spaceSet, spaceIndex) => {
        return <Space spaceSet={spaceSet} key={spaceIndex} />;
      })}
    </div>
  );
};

export default Block;
