import React from "react";
import "./Cv.css";
import profilePic from "../../../assets/imgs/circleb_reduced.jpg";

export default function CV() {
  return (
    <div id="cv-container">
      <h2 id="cv-title">Önéletrajz</h2>
      <div id="upper">
        <img src={profilePic} alt="Image" />
        <div id="line"></div>
        <div id="studies-box" className="cv-detail-box">
          <h2>Tanulmányok</h2>
          <br></br>
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
          <br></br>
          <p>HTML</p>
          <p>CSS, Tailwind CSS</p>
          <p>JS</p>
          <p>React JS, Redux</p>
          <p>Node.js</p>
          <p>SQL</p>
          <p>git</p>
        </div>
        <div id="other-skills-box" className="cv-detail-box">
          <h2>Egyéb ismeretek</h2>
          <br></br>
          <p>MS Word, Excel, PowerPoint</p>
          <p>Adobe Ai, Ps, Pr, Lr</p>
          <p>Agilis fejlesztés (Scrum)</p>
        </div>
        <div id="languages-box" className="cv-detail-box">
          <h2>Nyelvek</h2>
          <br></br>
          <p>magyar</p>
          <p>angol</p>
          <p>spanyol</p>
          <p>indonéz</p>
        </div>
      </div>
    </div>
  );
}
