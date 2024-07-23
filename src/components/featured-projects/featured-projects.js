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
          <p>connects to MediaBeacon, Duke's digital asset system. Users can view, download, and upload files, with changes syncing to the MediaBeacon server. This mobile interface enhances digital asset management efficiency.
</p>
        </figcaption>
      </div>

      <div className="project">
        <figure className="project__pic">
          <a href="https://github.com/zhuminghui17/full-stack-discussion-board" rel="noreferrer" target="_blank">
            <img src="./images/featured/full-stack-discussion-board/overview.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/zhuminghui17/full-stack-discussion-board" rel="noreferrer" target="_blank">Full Stack Discussion Board</a>
          </div>
          <p>
          enables professors to manage groups and posts, while both professors and students can create posts and answer questions, all authenticated via Keycloak. Built with Node.js, Express.js, Vue.js, and MongoDB, it features E2E testing in Playwright and a CI/CD pipeline in GitLab.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
