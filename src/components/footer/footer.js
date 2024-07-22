import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:mz223@duke.edu"
  },
  // {
  //   "title": "twitter",
  //   "url": "https://twitter.com/skvarnan"
  // },
  // {
  //   "title": "stackoverflow",
  //   "url": "https://stackoverflow.com/users/1452884/kavin-varnan"
  // },
  {
    "title": "github",
    "url": "https://github.com/zhuminghui17"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/zhuminghui17/"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="top">
        <span>Developed by&nbsp;</span>
      </div>
      <div className="bottom">
        <span>Matt Zhu</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2024</span>
      </div>
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a> and <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Kavin Varnan</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
