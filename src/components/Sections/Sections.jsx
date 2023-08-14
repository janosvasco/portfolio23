import "./sections.css";
import React from "react";
import { navTexts } from "../../constants";
import Header from "../Header/Header";

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
    if (text === "PIC") {
      return <Header />;
    } else if (text === "CV") {
      return (
        <div id="cv-container">
          <div id="upper">
            <img src="/imgs/circleb_reduced.jpg" alt="Image" />
            <div id="studies-box" className="cv-detail-box">
              <h2>Tanulmányok</h2>
              <p>Progmatic Academy - 2022/23</p>
              <p>Full Stack Fejlesztés</p>
              <p>Csapatokban szerzett munkatapasztalat két projektben</p>
              <br></br>
              <p>ISI Yogyakarta - 2018/19</p>
              <p>Batik & Handicraft</p>
              <p>Egyetemi dizájn kurzus indonéz nyelven</p>
              <br></br>
              <p>Magyar Képzőművészeti Egyetem - 2012-18</p>
              <p>Képzőművész MA</p>
              <p>Osztatlan mesterképzés a Festő Tanszéken</p>
              <br></br>
              <p>Chelsea Collage of Arts, London - 2015/16</p>
              <p>Képzőművész BA</p>
              <p>Projektalapú művészeti gyakorlat csoportokban</p>
            </div>
          </div>
          <div id="lower">
            <div id="programming-skills-box" className="cv-detail-box">
              <h2>Képességek</h2>
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
              <p>git</p>
              <p>React JS</p>
              <p>Node.js</p>
              <p>SQL</p>
            </div>
            <div id="other-skills-box" className="cv-detail-box">
              <h2>Egyéb ismeretek</h2>
              <p>MS Word, Excel, Pp</p>
              <p>Adobe Ai, Ps, Pr, Lr</p>
            </div>
            <div id="languages-box" className="cv-detail-box">
              <h2>Nyelvek</h2>
              <p>magyar</p>
              <p>angol</p>
              <p>spanyol</p>
              <p>indonéz</p>
            </div>
          </div>
        </div>
      );
    } else if (text === "GAMES") {
      return <img src="/imgs/tetris.jpg" alt="Image" />;
    } else if (text === "MOTIVATION") {
      return (
        <>
          <div className="text-box">
            <p>
              Képző- és alkalmazott művészeti tanulmányaimat 2019- ben fejeztem
              be. Azóta művészi karrieremre koncentráltam, közben értékes
              munkatapasztalatot is szereztem a magyarországi Indonéz
              Nagykövetségen a Nagykövet asszisztenseként. Az elmúlt évek során
              elhatároztam, hogy célom a kreativitásom és az analitikus
              gondolkodásom kamatoztatásával lenyűgöző weboldalak és
              alkalmazások készítése.
            </p>
          </div>
        </>
      );
    }
  }
}
