import React from "react";
import "./Apps.css";
import AppItem from "./AppItem";

export default function Apps() {
  return (
    <div id="apps-container">
      <h2>Alkalmazások</h2>
      <AppItem link="/tetris" id="tetris-box" name="Tetrisz" />
      <AppItem link="#" id="rpx-box" name="Kő-papír-olló" />
      <AppItem link="/oxo" id="ttt-box" name="OXO" />
      <AppItem link="/#" id="quiz-box" name="Kvíz" />
      <AppItem
        link="/investment"
        id="inv-calc-box"
        name="Befektetés Kalkulátor"
      />
      <AppItem link="/#" id="placekeeper-box" name="Placekeeper" />
    </div>
  );
}
