import React, { useState } from "react";
import "./Projects.css";
import TabButton from "./TabButton";
import { EXAMPLES } from "./EXAMPLES";

export default function Projects() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Kérlek válassz ki egy témát</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }

  return (
    <>
      <h2 id="projects-title">Projektek</h2>
      <div className="project-container">
        <p>frontend project</p>
      </div>
      <menu>
        <TabButton
          isSelected={selectedTopic === "csapatmunka"}
          onSelect={() => handleSelect("csapatmunka")}
        >
          Csapatmunka
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "kihívások"}
          onSelect={() => handleSelect("kihívások")}
        >
          Kihívások
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "idővonal"}
          onSelect={() => handleSelect("idővonal")}
        >
          Idővonal
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "dokumentáció"}
          onSelect={() => handleSelect("dokumentáció")}
        >
          Dokumentáció
        </TabButton>
      </menu>
      {tabContent}
      <div className="project-container">
        <p>fullstack project</p>
      </div>
    </>
  );
}
