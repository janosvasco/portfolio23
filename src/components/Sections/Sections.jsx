import React from "react";
import "./sections.css";
import { navTexts } from "../../constants";
import Header from "../Header/Header";
import Games from "./Games";
import Motivation from "./Motivation";
import Projects from "./Projects";
import Cv from "./Cv";

export default function Sections() {
  return (
    <main>
      {navTexts.map((text, id) => {
        return (
          <section className="section" id={text} key={id} data-label={text}>
            {renderSectionContent(text)}
          </section>
        );
      })}
    </main>
  );

  function renderSectionContent(text) {
    if (text === "HEADER") {
      return <Header />;
    } else if (text === "CV") {
      return <Cv />;
    } else if (text === "MOTIVATION") {
      return <Motivation />;
    } else if (text === "PROJECTS") {
      return <Projects />;
    } else if (text === "GAMES") {
      return <Games />;
    }
  }
}
