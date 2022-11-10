import React from "react";

export default function Game({ game }) {
  return (
    <li>
      <p>{game.name}</p>
      <p>{game.score} / 10</p>
    </li>
  );
}
