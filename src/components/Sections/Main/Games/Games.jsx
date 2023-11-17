import React from "react";
import "./Games.css";
import GameItem from "./GameItem";

export default function Games() {
  return (
    <div id="games-container">
      <h2>Alkalmazások</h2>
      <GameItem link="/tetris" id="tetris-box" title="Tetrisz" />
      <GameItem link="#" id="rpx-box" title="Kő-papír-olló" />
      <GameItem link="/oxo" id="ttt-box" title="OXO" />
      <GameItem link="/#" id="quiz-box" title="Kvíz" />
      <GameItem
        link="/investment"
        id="inv-calc-box"
        title="Befektetés Kalkulátor"
      />
      <GameItem link="/#" id="placekeeper-box" title="Placekeeper" />
    </div>
  );
}
