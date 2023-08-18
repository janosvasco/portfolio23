import "./GameStats.css";
import React from "react";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Szint</li>
      <li className="value">{level}</li>
      <li>Hátralévő sorok</li>
      <li className="value">{linesToLevel}</li>
      <li>Pontok</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
