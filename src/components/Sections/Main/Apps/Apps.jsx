import React from "react";
import "./Apps.css";
import AppItem from "./AppItem";

export default function Apps() {
  return (
    <div id="games-container">
      <h2>Alkalmazások</h2>
      <AppItem link="/tetris" id="tetris-box" title="Tetrisz" />
      <AppItem link="#" id="rpx-box" title="Kő-papír-olló" />
      <AppItem link="/oxo" id="ttt-box" title="OXO" />
      <AppItem link="/#" id="quiz-box" title="Kvíz" />
      <AppItem
        link="/investment"
        id="inv-calc-box"
        title="Befektetés Kalkulátor"
      />
      <AppItem link="/#" id="placekeeper-box" title="Placekeeper" />
    </div>
  );
}
