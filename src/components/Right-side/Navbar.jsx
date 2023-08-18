import "./navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navTexts } from "../../constants";

export default function Navbar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);

  function getSectionOffsets() {
    return navTexts.map((text) => {
      const section = document.getElementById(text);
      return section.offsetTop;
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = getSectionOffsets();
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const newActiveLinkIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (!sectionOffsets[index + 1] ||
            scrollPosition < sectionOffsets[index + 1])
      );

      setActiveLinkIndex(newActiveLinkIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-hover-white-${
        activeLinkIndex === 0 || activeLinkIndex === 1 || activeLinkIndex === 4
          ? "active"
          : "inactive"
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
              id === 4 || id === 1 || id === 0 ? "-white" : ""
            }`}
            className="nav-link"
            onClick={() => {
              setActiveLinkIndex(id);
            }}
          ></Link>
          <span
            className={`nav-label ${
              (id === 0 || id === 1 || id === 4) && id === activeLinkIndex
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
