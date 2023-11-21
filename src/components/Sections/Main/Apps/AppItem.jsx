import React from "react";
import { NavLink } from "react-router-dom";

export default function GameItem({ link, id, name }) {
  return (
    <NavLink to={link}>
      <div className="app-item-box" id={id}>
        <h3 className="app-name">{name}</h3>
      </div>
    </NavLink>
  );
}
