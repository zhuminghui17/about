import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Duke University",
    "url": "https://duke.edu/",
    "time": "Oct 2023 - Dec 2023",
    "position": "Software Engineer Intern"
  },
  {
    "company": "Christensen Family Center for Innovation",
    "url": "https://cfci.pratt.duke.edu/",
    "time": "May 2023 - Aug 2023",
    "position": "Software Engineer Intern"
  }
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      {/* <a href="./kavin_varnan_resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a> */}
    </div>
  </section>
)

export default Experience
