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
      <div className="top">
        <span>Designed &amp; Developed by</span>
      </div>
      <div className="bottom">
        <span>Brittany Chiang</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2018</span>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
            <img src="./images/social/{{link.title}}.svg" alt={social.title}/>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
