import React from "react";
import "./Games.css";
import GameItem from "./GameItem";

export default function Games() {
  return (
    <>
      <h2 id="games-title">Alkalmazások</h2>
      <div id="games-container">
        <GameItem link="/tetris" id="tetris-box" title="Tetrisz" />
        <GameItem link="#" id="rpx-box" title="Kő-papír-olló">
          <p>hamarosan...</p>
        </GameItem>
      </div>
    </>
  );
}
