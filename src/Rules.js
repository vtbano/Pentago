import React from "react";

const Rules = () => {
  return (
    <div className="rules-container">
      <div className="rules-title">RULES</div>
      <h4>Start Game:</h4>
      <p className="start-game">
        The game starts with an empty game board. The board consist of 9
        rotating blocks that can shift left or right. Depending on how many
        players were selected the board, the game will set up 2,3 or 4 players.
        The first player will place a marker on the game board. The markers are
        automatically set to 1,2,3,4 respectively to Player 1, Player 2, Player
        3, Player 4.
      </p>
      <h4>Game Objective:</h4>
      <p className="game-objective">
        The object of the game is to get five markers in a row before the other
        opponent(s). The mind twisting part of PentaGo is that each player will
        rotate one of the nine game blocks 90 degrees (left), clockwise or
        counter clockwise (right), as part of each turn. A 180 degree (double
        rotation) is not allowed. The rotation is the key to create winning
        positions in PentaGo.
      </p>
      <h4>Play Game:</h4>
      <p className="play-game">
        Players take turns at placing markers on the game board and twisting the
        game blocks. A player is free to twist any of the game blocks,
        regardless of which game block the player placed the marker on. In the
        beginning of the game, there will be neutral game blocks that will not
        have an effect during their turn. A neutral game block is one that is
        empty or has only one marker in the middle of it. Rotating a neutral
        game block will have no effect on the positional nature of the game
        board.
      </p>
      <h4>Win Game:</h4>
      <p className="win-game">
        A winning row of five markers can occur vertically, horizontally or
        diagonally, anywhere on the board and will span two or three game
        blocks. What seems like a simple five-in-a-row game quickly gets mind
        twisting as the board fills up and players are rotating the game blocks,
        creating a constantly changing and challenging game scenario. You’ll
        want to really watch your opponents position as it relates to yours and
        play as much defensive as you do offense.
      </p>
    </div>
  );
};
export default Rules;
