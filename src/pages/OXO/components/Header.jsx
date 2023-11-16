import React from "react";
import logo from "../assets/oxo_logo.png";

export default function OxoHeader() {
  return (
    <header id="oxo-header">
      <img src={logo} alt="Futuristic oxo logo" />
      <h1 id="oxo-h1">OXO</h1>
    </header>
  );
}
