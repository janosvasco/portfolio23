import React from "react";
import { NavLink } from "react-router-dom";

export default function Games() {
  return (
    <>
      <h2 id="games-title">Játékok</h2>
      <div id="games-container">
        <NavLink to="/tetris">
          <div className="games-box" id="tetris-box">
            <h3 className="game-type">Tetrisz</h3>
            {<div id="tetris-bg"></div>}
          </div>
        </NavLink>
        <NavLink to="#">
          <div className="games-box" id="rps-box">
            <h3 className="game-type">Kő-papír-olló</h3>
            <p>hamarosan...</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}
