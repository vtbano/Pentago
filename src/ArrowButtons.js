import React from "react";
import gameResultType from "./gameResultType.js";

const ArrowButtons = ({
  board,
  rotateBlockSelected,
  blockSelected,
  setPlayState,
  playStateType,
  players,
  currentPlayer,
  setCurrentPlayer,
  checkWinner,
  setDisplayContainerState,
  containerStateType,
  setGameResult,
  setWinPlayer,
}) => {
  const nextPlayer = (currentPlayer, players) => {
    console.log("Next Player:", currentPlayer, players);
    if (currentPlayer.marker % players.length === 0) {
      return setCurrentPlayer(players[0]);
    } else {
      const newPlayer = players[currentPlayer.marker];
      return setCurrentPlayer(newPlayer);
    }
  };

  const checkAllPlayers = (players, newBoard) => {
    return players.filter((player) => {
      const resultCheckWinner = checkWinner(newBoard, player.marker);
      if (resultCheckWinner === true) {
        setPlayState(playStateType.win);
        setDisplayContainerState(containerStateType.WinState);
        setGameResult(gameResultType.Win);
        setWinPlayer(player); //this will change depending on who the winner is from resultCheckWinner mapping
        console.log(player, "WINS");
      } else if (resultCheckWinner === 0) {
        setPlayState(playStateType.tie);
        setDisplayContainerState(containerStateType.TieState);
        setGameResult(gameResultType.Tie);
        console.log("TIE");
      } else if (resultCheckWinner === false) {
        console.log("Change to Mark Space");
        setPlayState(playStateType.markSpace);
        setDisplayContainerState(containerStateType.ActivePlayer);
        console.log("if statement call", currentPlayer, players);
        nextPlayer(currentPlayer, players);
      }
      return resultCheckWinner;
    });
  };

  return (
    <section className="arrow-buttons">
      <img
        src="./images/icons8-leftArrow-3-96.png"
        alt="left arrow button"
        className="left-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 90);
          const newBoard = rotateBlockSelected(blockSelected, board, 90);
          // const resultCheckWinner = checkWinner(newBoard, currentPlayer.marker);
          checkAllPlayers(players, newBoard);
          console.log("checkAllPlayers:", checkAllPlayers(players, newBoard));

          // if (resultCheckWinner === true) {
          //   setPlayState(playStateType.win);
          //   setDisplayContainerState(containerStateType.WinState);
          //   setGameResult(gameResultType.Win);
          //   setWinPlayer(currentPlayer); //this will change depending on who the winner is from resultCheckWinner mapping
          //   console.log(currentPlayer, "WINS");
          // } else if (resultCheckWinner === 0) {
          //   setPlayState(playStateType.tie);
          //   setDisplayContainerState(containerStateType.TieState);
          //   setGameResult(gameResultType.Tie);
          //   console.log("TIE");
          // } else if (resultCheckWinner === false) {
          //   console.log("Change to Mark Space");
          //   setPlayState(playStateType.markSpace);
          //   setDisplayContainerState(containerStateType.ActivePlayer);
          //   console.log("if statement call", currentPlayer, players);
          //   nextPlayer(currentPlayer, players);
          // }
        }}
      />
      <img
        src="./images/icons8-RightArrow-96.png"
        alt="right arrow button"
        className="right-arrow"
        onClick={() => {
          rotateBlockSelected(blockSelected, board, 270);

          const newBoard = rotateBlockSelected(blockSelected, board, 270);
          const resultCheckWinner = checkWinner(newBoard, currentPlayer.marker);
          console.log(
            "result of checkWinner after right rotatation",
            resultCheckWinner
          );
          if (resultCheckWinner === true) {
            setPlayState(playStateType.win);
            setDisplayContainerState(containerStateType.WinState);
            setGameResult(gameResultType.Win);
            setWinPlayer(currentPlayer); //this will change depending on who the winner is from resultCheckWinner mapping
            console.log(currentPlayer, "WINS");
          } else if (resultCheckWinner === 0) {
            setPlayState(playStateType.tie);
            setDisplayContainerState(containerStateType.TieState);
            setGameResult(gameResultType.Tie);
            console.log(currentPlayer, "TIE");
          } else if (resultCheckWinner === false) {
            console.log("Change to Mark Space");
            setPlayState(playStateType.markSpace);
            nextPlayer(currentPlayer, players);
            setDisplayContainerState(containerStateType.ActivePlayer);
          }
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
