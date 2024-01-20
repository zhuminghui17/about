import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:brittany.chiang@gmail.com"
  },
  {
    "title": "twitter",
    "url": "https://twitter.com/bchiang7"
  },
  {
    "title": "instagram",
    "url": "https://instagram.com/bchiang7"
  },
  {
    "title": "codepen",
    "url": "http://codepen.io/bchiang7"
  },
  {
    "title": "github",
    "url": "https://github.com/bchiang7"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/bchiang7"
  },
]

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
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
