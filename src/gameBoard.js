import React, { useState } from "react";
import Block from "./block";

const Gameboard = () => {
  const [currentPlayer, setCurrentPlayer] = useState({ name: "", number: "" });
  const [players, setPlayers] = useState[{}];
  const [board, setBoard] = useState([]);
  const [marked, setMarked] = useState({});
  const [blockSelected, setBlockSelected] = useState({ row: "", column: "" });
  return <div className="gameboard"></div>;
};

export default Gameboard;
