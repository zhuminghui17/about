import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["JavaScript (ES6)", "TypeScript", "HTML", "CSS/Sass", "Python", "SQL", "R"],
  "frameworksTitle": "Frameworks",
  "frameworks": ["Ember & Glimmer", "React", "Jekyll", "Node", "D3", "Wordpress", "Timber"],
  "toolsTitle": "Tools",
  "tools": ["Bash", "Git & Github", "Gulp & Grunt", "Chrome DevTools", "Postman", "MongoDB"],
  "designTitle": "Design",
  "design": ["Sketch", "InDesign", "InVision", "Prototyping", "Wireframing", "User Testing"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">Frameworks</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">Tools</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">Design</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
