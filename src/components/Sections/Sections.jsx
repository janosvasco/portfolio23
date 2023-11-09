import React from "react";
import "./sections.css";
import { navTexts } from "../../constants";
import Header from "../Header/Header";
import Games from "./Games";
import Motivation from "./Motivation";
import Projects from "./Projects";
import Cv from "./Cv";

export default function Sections() {
  const sections = navTexts.map((text) => {
    return (
      <section className="section" id={text} key={text} data-label={text}>
        {renderSectionContent(text)}
      </section>
    );
  });

  function renderSectionContent(text) {
    if (text === "FEJLÉC") {
      return <Header />;
    } else if (text === "CV") {
      return <Cv />;
    } else if (text === "MOTIVÁCIÓ") {
      return <Motivation />;
    } else if (text === "PROJEKTEK") {
      return <Projects />;
    } else if (text === "JÁTÉKOK") {
      return <Games />;
    }
  }

  console.log(sections);

  return (
    <>
      <header>
        {sections.find((section) => section.props.id === "FEJLÉC")}
      </header>
      <main>{sections.filter((section) => section.props.id !== "FEJLÉC")}</main>
    </>
  );
}
