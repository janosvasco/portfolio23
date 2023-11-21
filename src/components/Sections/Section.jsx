import React from "react";
import "./Section.css";
import Header from "./Header/Header";
import Cv from "./Main/Cv";
import Motivation from "./Main/Motivation";
import Projects from "./Main/Projects";
import Apps from "./Main/Apps/Apps";

export default function Section({ children, ...props }) {
  function renderSectionContent(text) {
    if (text === "FEJLÉC") {
      return <Header />;
    } else if (text === "CV") {
      return <Cv />;
    } else if (text === "MOTIVÁCIÓ") {
      return <Motivation />;
    } else if (text === "PROJEKTEK") {
      return <Projects />;
    } else if (text === "ALKALMAZÁSOK") {
      return <Apps />;
    }
  }

  return <section {...props}>{renderSectionContent(props.id)}</section>;
}
