import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "JavaScript", "Java", "C/C++", "Swift", "Dart", "SQL", "HTML", "CSS"],
  "frameworksTitle": "Frameworks",
  "frameworks": ["Express.js", "Flask", "Vue.js", "React.js", "Bootstrap", "UIKit", "SwiftUI"],
  "technologiesTitle": "Technologies",
  "technologies": ["Node.js", "REST APIs", "MongoDB", "MySQL", "SQLite", "PostgreSQL", "Firebase", "Figma"],
  "devOpsTitle": "DevOps",
  "devOps": ["Docker", "Kubernetes", "CI/CD", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data, index) => <li key={index} className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data, index) => <li key={index} className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.technologiesTitle}</div>
          <ul>
            {skillsData.technologies.map((data, index) => <li key={index} className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.devOpsTitle}</div>
          <ul>
            {skillsData.devOps.map((data, index) => <li key={index} className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
