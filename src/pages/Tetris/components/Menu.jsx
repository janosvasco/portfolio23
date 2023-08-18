import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu({ onClick }) {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Új Játék
      </button>
      <NavLink to="/">
        <button className="Button">Vissza</button>
      </NavLink>
    </div>
  );
}
