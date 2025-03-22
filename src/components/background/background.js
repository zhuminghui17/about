import * as React from "react"
const backgroundData = {
  title: "Background",
  part1: "I'm currently a Software Engineer at ",
  part2: "Vertice AI",
  part2Href: "https://verticeanalytics.ai/",
  part3: ", a fast-growing fintech startup that delivers consumable AI to drive member growth for community financial institutions. Previously, I graduated from ",
  part4: "Duke University",
  part4Href: "https://duke.edu/",
  part5: " with an MS degree in Computer Science and Economics in 2024.",
  
  line2: "Utilizing my dual background in fintech, I have touched on every aspect of software engineering, spanning data engineering, analytics, AI/ML, database management, backend, and frontend development. Since day one, I have delivered innovative and impactful features that help scale our solution and drive business success.",
  
  line3: "Outside of work, I always love exploring new experiences — from discovering new travel destinations and trying different ice cream flavors from Ben & Jerry's, to keeping up with the latest tech trends or AI products. You'll also find me capturing stunning sunset photos or cheering for Duke basketball teams!"
};

const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
        <a className="underline-link" href={backgroundData.part4Href} target="_blank" rel="noreferrer">{backgroundData.part4}</a>
        {backgroundData.part5}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        {backgroundData.line3}
      </p>
    </div>
  </section>
)

export default Background