import React from "react";
import { NavLink } from "react-router-dom";

export default function GameItem({ children, link, id, title }) {
  return (
    <NavLink to={link}>
      <div className="games-box" id={id}>
        <h3 className="game-type">{title}</h3>
        {<div id="tetris-bg"></div>}
        {children}
      </div>
    </NavLink>
  );
}
