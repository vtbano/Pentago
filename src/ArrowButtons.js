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
  moves,
  setMoves,
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
      return checkWinner(newBoard, player.marker) === true;
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
          const resultCheckWinner = checkWinner(newBoard, currentPlayer.marker);
          const checkAllPlayersArray = checkAllPlayers(players, newBoard);
          const checkAllPlayersArrayLength = checkAllPlayersArray.length;
          console.log("Winning Player Left Click:", checkAllPlayersArray);
          console.log(
            "checkAll Players Array Length Left Click:",
            checkAllPlayersArrayLength
          );

          if (checkAllPlayersArrayLength > 0) {
            setPlayState(playStateType.win);
            setDisplayContainerState(containerStateType.WinState);
            setGameResult(gameResultType.Win);
            setWinPlayer(checkAllPlayersArray[0]); //this will change depending on who the winner is from resultCheckWinner mapping
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `WINNING ROTATION: ${
                  checkAllPlayersArray[0].name
                } rotated block ${blockSelected + 1} left`,
              },
            ]);
            console.log(currentPlayer, "WINS");
          } else if (
            checkAllPlayersArrayLength <= 0 &&
            resultCheckWinner === 0
          ) {
            setPlayState(playStateType.tie);
            setDisplayContainerState(containerStateType.TieState);
            setGameResult(gameResultType.Tie);
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `LAST ROTATION TO TIE: ${
                  currentPlayer.name
                } rotated block ${blockSelected + 1} left`,
              },
            ]);
            console.log("TIE");
          } else if (
            checkAllPlayersArrayLength <= 0 &&
            resultCheckWinner === false
          ) {
            console.log("Change to Mark Space");
            setPlayState(playStateType.markSpace);
            setDisplayContainerState(containerStateType.ActivePlayer);
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `${currentPlayer.name} rotated block ${
                  blockSelected + 1
                } left`,
              },
            ]);

            nextPlayer(currentPlayer, players);
          }
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

          const checkAllPlayersArray = checkAllPlayers(players, newBoard);
          const checkAllPlayersArrayLength = checkAllPlayersArray.length;
          console.log("Winning Player Right Click:", checkAllPlayersArray);
          console.log(
            "checkAll Players Array Length Right Click:",
            checkAllPlayersArrayLength
          );

          if (checkAllPlayersArrayLength > 0) {
            setPlayState(playStateType.win);
            setDisplayContainerState(containerStateType.WinState);
            setGameResult(gameResultType.Win);
            setWinPlayer(checkAllPlayersArray[0]); //this will change depending on who the winner is from resultCheckWinner mapping
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `WINNING ROTATION: ${
                  checkAllPlayersArray[0].name
                } rotated block ${blockSelected + 1} right`,
              },
            ]);
          } else if (
            checkAllPlayersArrayLength <= 0 &&
            resultCheckWinner === 0
          ) {
            setPlayState(playStateType.tie);
            setDisplayContainerState(containerStateType.TieState);
            setGameResult(gameResultType.Tie);
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `LAST ROTATION TO TIE: ${
                  currentPlayer.name
                } rotated block ${blockSelected + 1} right`,
              },
            ]);
            console.log("TIE");
          } else if (
            checkAllPlayersArrayLength <= 0 &&
            resultCheckWinner === false
          ) {
            console.log("Change to Mark Space");
            setPlayState(playStateType.markSpace);
            setDisplayContainerState(containerStateType.ActivePlayer);
            setMoves([
              ...moves,
              {
                id: new Date().getTime().toString(),
                move: `${currentPlayer.name} rotated block ${
                  blockSelected + 1
                } right`,
              },
            ]);

            nextPlayer(currentPlayer, players);
          }
        }}
      />
      <div className="arrow-buttons-p">
        Select a block to rotate and click which direction you want the block to
        shift.
        <div className="arrow-buttons-q">Clockwise or CounterClockwise? </div>
      </div>
    </section>
  );
};
export default ArrowButtons;
