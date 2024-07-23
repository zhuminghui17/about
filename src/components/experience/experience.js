import * as React from "react"
import "./experience.scss"

const experienceData = [
  {
    "company": "Duke University",
    "url": "https://duke.edu/",
    "time": "Oct – Dec 2023",
    "position": "Software Engineer Intern",
    "location": "Durham, NC",
    "description": [
      "Pinpointed the need for an iOS mobile application at Duke's MediaBeacon, a cloud-based file management system previously limited to web access; utilized Swift to architect an MVP from 0 to 1, enabling mobile access to 4M+ digital assets, leading to a 60%+ improvement in workflow efficiency, and a projected $10K+ annual cost saving by avoiding extra software subscriptions",
      "API Integration: Integrated MediaBeacon's REST APIs, and implemented 20+ features including search, preview, and metadata, successfully fulfilling the client’s comprehensive functionality requirements",
      "UI Design: Crafted an intuitive UI with SwiftUI and MVVM design pattern for code maintainability and testability",
      "Quality Assurance: Performed unit testings with XCTest framework, achieving a notable 95% code coverage",
      "Agile: Shipped high-quality product in 3 sprints under SDLC principle, used Notion to manage a 3-developer team"
    ]
  },
  {
    "company": "Christensen Family Center for Innovation",
    "url": "https://cfci.pratt.duke.edu/",
    "time": "May – Aug 2023",
    "position": "Software Engineer Intern",
    "location": "Durham, NC",
    "description": [
      "Collaborated with clients to outline product scope; initialized, developed, tested, and deployed 2 mobile app MVPs for clients in 1) education, engaging 1K+ students in PE education; and 2) healthcare, providing medical advice to a niche patient group",
      "Cross-Platform: Crafted 10+ core features with Dart and Flutter, utilized Firebase for NoSQL storage; created UI in Figma",
      "Cloud Services: Deployed 2 scheduled functions on GCP, automated database update, saving 20% in manual update time",
      "Performance Tuning: Reduced database queries, improving response times by 10%+ for smoother user interactions",
      "UX Testing: Drove TestFlight beta testing and 3 rounds of user interviews, improved UX for a 25% boost in user satisfaction",
      "Agile: Engaged in 6 Agile product-design sprints with customer discovery, prototyping, interviews, and post-sprint review"
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
                {/* <div className="job__location">{data.location}</div> */}
              </div>
              <div className="job__position">{data.position}</div>
              <ul className="job__description">
                {
                  data.description.map((item, i) => <li key={i}>{item}</li>)
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)


export default Experience