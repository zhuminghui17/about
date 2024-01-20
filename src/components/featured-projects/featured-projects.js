import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://blistabloc.com/" rel="noreferrer" target="_blank">
            <img src="./images/featured/blistabloc/blistabloc.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://blistabloc.com/" rel="noreferrer" target="_blank">blistabloc</a>
          </div>
          <p>Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that
            prevents
            blisters from forming.</p>
        </figcaption>
      </div>

      <div className="project screentime">
        <figure className="project__pic phones">
          <a href="https://play.google.com/store/apps/details?id=com.starry.management" rel="noreferrer" target="_blank">
            <div className="phone">
              <img src="./images/featured/screentime/screentime1.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/screentime/screentime3.png" alt=""/>
            </div>
            <div className="phone">
              <img src="./images/featured/screentime/screentime4.png" alt=""/>
            </div>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://play.google.com/store/apps/details?id=com.starry.management" rel="noreferrer" target="_blank">ScreenTime
              2.0</a>
          </div>
          <p>Starry Station feature that provided users with the ability to easily filter content, pause the internet,
            and even
            create custom rules for blocking apps like Facebook and Twitter right from their phones.</p>
        </figcaption>
      </div>

      <div className="project interventions">
        <figure className="project__pic">
          <a href="https://interventions.design/" rel="noreferrer" target="_blank">
            <img src="./images/featured/interventions/interventions.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://interventions.design/" rel="noreferrer" target="_blank">Interventions</a>
          </div>
          <p>Interactive marketing website for Northeastern's first annual student-led design conference,
            Interventions.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
