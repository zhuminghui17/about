import * as React from "react"
import "./experience.scss"

const experienceData = [
    {
    "company": "Vertice AI, Inc.",
    "url": "https://verticeanalytics.ai/",
    "time": "Sept 2024 - Present",
    "position": "Software Engineer",
    "location": "Remote, US",
    "description": [
      "TypeScript, React, Material UI, Express, Python, Postgres/SQL, AWS (ECR, ECS, RDS, etc.)"
    ]
  },
  {
    "company": "Duke University",
    "url": "https://duke.edu/",
    "time": "Oct – Dec 2023",
    "position": "Software Engineer Intern",
    "location": "Durham, NC",
    "description": [
      "Worked with Swift, SwiftUI, and REST APIs to deliver an iOS mobile app MVP."
    ]
  },
  {
    "company": "Christensen Family Center for Innovation",
    "url": "https://cfci.pratt.duke.edu/",
    "time": "May – Aug 2023",
    "position": "Software Engineer Intern",
    "location": "Durham, NC",
    "description": [
      "Worked with Flutter, Firebase, GCP, and Figma to ship 2 cross-platform mobile app MVPs.",
    ]
  }
]


const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data, index) => (
            <div key={index} className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="time-place">
                <div className="job__position">{data.position}</div>
                <div className="job__time">{data.location}</div>
              </div>
              <div className="jd">
                <div className="job-description"> {data.description} </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)


export default Experience
