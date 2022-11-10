import React from "react";

export default function Game({ game }) {
  return <li>{game.name} {game.score}</li>;
}
