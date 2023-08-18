import "./GameController.css";
import React from "react";

import { Action, actionForKey } from "../business/Input";
import { PlayerController } from "../business/PlayerController";

import { useInterval } from "../hooks/useInterval";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, 1000);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);

    if (action === Action.Quit) {
      setGameOver(true);
    }
  };
  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    handleInput({ action });
  };

  const handleInput = ({ action }) => {
    PlayerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};

export default GameController;
