import React, { useState } from "react";
import { EXAMPLES } from "./EXAMPLES";
import TabButton from "./TabButton";

export default function ProjectDetails() {
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
    <div id="details-container">
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
    </div>
  );
}
