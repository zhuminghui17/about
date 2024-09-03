import * as React from "react"

const backgroundData = {
  title: "Background",
  part1: "I recently graduated from ",
  part2: "Duke University",
  part2Href: "https://duke.edu/",
  part3: " with an MS degree in Computer Science and Economics. Currently I work as a Software Engineer Intern at Bragr, where I'm responsible for full stack development and AI engineering.",
  line2: "My experience spans full-stack web development, mobile app development, cloud computing, and AI/ML. I have a strong foundation in multiple programming languages and frameworks. I'm actively looking for full-time software engineer roles in the US!",
  line3Part2: "",
  line3Part3: "",
  line3Part3Href: "",
  line3Part4: ".",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
        <a className="underline-link" href={backgroundData.line3Part3Href} target="_blank" rel="noreferrer">{backgroundData.line3Part3}</a>
        {backgroundData.line3Part4}
      </p>
    </div>
  </section>
)

export default Background