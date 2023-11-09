import React from "react";
import "./sections.css";
import { navTexts } from "../../constants";
import Header from "../Header/Header";
import Games from "./Games";
import Motivation from "./Motivation";
import Projects from "./Projects";
import CV from "./CV";

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
    if (text === "FEJLÉC") {
      return <Header />;
    } else if (text === "CV") {
      return <CV />;
    } else if (text === "MOTIVÁCIÓ") {
      return <Motivation />;
    } else if (text === "PROJEKTEK") {
      return <Projects />;
    } else if (text === "JÁTÉKOK") {
      return <Games />;
    }
  }
}
