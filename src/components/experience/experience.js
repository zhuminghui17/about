import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Upstatement",
    "url": "https://www.upstatement.com/",
    "time": "May 2018 - Present",
    "position": "Engineer"
  },
  {
    "company": "Scout",
    "url": "https://web.northeastern.edu/scout/",
    "time": "Jan - June 2018",
    "position": "Studio Developer"
  },
  {
    "company": "Apple Music",
    "url": "https://www.apple.com/music/",
    "time": "July - Dec 2017",
    "position": "UI Engineer Co-op"
  },
  {
    "company": "Scout",
    "url": "https://web.northeastern.edu/scout/",
    "time": "Jan - June 2017",
    "position": "Studio Developer"
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

      <a href="./kavin-resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
