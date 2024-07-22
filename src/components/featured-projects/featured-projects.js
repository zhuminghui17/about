import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://github.com/zhuminghui17/ECE564-AssetMgmt/" rel="noreferrer" target="_blank">
            <img src="./images/featured/asset-mgmt/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/zhuminghui17/ECE564-AssetMgmt/" rel="noreferrer" target="_blank">Duke Asset Management iOS App</a>
          </div>
          <p>The Duke Asset Management iOS Mobile App serves as a mobile gateway to MediaBeacon, Duke's extensive digital asset management system. This application enables users to seamlessly view, download, and upload files while ensuring that all modifications are synchronized with the MediaBeacon web server. Designed for convenience and efficiency, this mobile interface is a significant step forward in digital asset management.
</p>
        </figcaption>
      </div>

      {/* <div className="project screentime">
        <figure className="project__pic phones">
          <a href="https://play.google.com/store/apps/details?id=com.talkingyak.app" rel="noreferrer" target="_blank">
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss1.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss2.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/talkingyak/talkingyak_ss3.png" alt=""/>
            </div>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://play.google.com/store/apps/details?id=com.talkingyak.app" rel="noreferrer" target="_blank">Talking Yak</a>
          </div>
          <p>Talking Yak is an English learning app specifically created for Hindi and Tamil speakers.</p>
        </figcaption>
      </div> */}
    </div>
  </section>
)

export default FeaturedProjects
