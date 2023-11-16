import React from "react";
import { navTexts } from "../../constants";
import Navbar from "./Right-side/Navbar";
import Section from "./Section";

export default function Sections() {
  const sections = navTexts.map((text) => {
    return (
      <Section className="section" id={text} key={text} data-label={text} />
    );
  });

  const headerSection = sections.find(
    (section) => section.props.id === "FEJLÉC"
  );

  const mainSections = sections.filter(
    (section) => section.props.id !== "FEJLÉC"
  );

  return (
    <>
      <header id="main-header">{headerSection}</header>
      <Navbar />
      <main>{mainSections}</main>
    </>
  );
}
