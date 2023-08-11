/* import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { navTexts } from "../../constants";

export default function Navbar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);

  return (
    <nav>
      {navTexts.map((text, id) => (
        <div
          className={`nav-item ${id === activeLinkIndex ? "active" : ""}`}
          key={id}
          data-for-section={text}
        >
          <Link
            to={text}
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            activeClass={`nav-link-selected${
              id === 3 || id === 1 ? "-white" : ""
            }`}
            className="nav-link"
            onClick={() => {
              setActiveLinkIndex(id);
            }}
          ></Link>
          <span
            className={`nav-label ${
              (id === 1 || id === 3) && id === activeLinkIndex
                ? "nav-label-white"
                : ""
            }`}
          >
            {text}
          </span>
        </div>
      ))}
    </nav>
  );
}
 */

import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { navTexts } from "../../constants";

export default function Navbar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);

  return (
    <nav
      className={`nav-hover-white-${
        activeLinkIndex === 1 || activeLinkIndex === 3 ? "active" : "inactive"
      }`}
    >
      {navTexts.map((text, id) => (
        <div
          className={`nav-item ${id === activeLinkIndex ? "active" : ""}`}
          key={id}
          data-for-section={text}
        >
          <Link
            to={text}
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            activeClass={`nav-link-selected${
              id === 3 || id === 1 ? "-white" : ""
            }`}
            className="nav-link"
            onClick={() => {
              setActiveLinkIndex(id);
            }}
          ></Link>
          <span
            className={`nav-label ${
              (id === 1 || id === 3) && id === activeLinkIndex
                ? "nav-label-white"
                : ""
            }`}
          >
            {text}
          </span>
        </div>
      ))}
    </nav>
  );
}
