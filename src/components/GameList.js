import React from "react";
import Game from './Game';

export default function GameList({ games, title }) {
  const gamesList = games.map(game => <Game key={game.name} game={game} />);
  return (
    <ul>
      <h2>{title}</h2>
      {gamesList}
    </ul>
  );
}
