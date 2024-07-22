import * as React from "react"


// test

const backgroundData = {
  title: "Background",
  part1: "I recently graduated from ",
  part2: "Duke University",
  part2Href: "https://talkingyak.com/",
  part3: " with an MS degree in Computer Science and Economics.",
  line2: "My experience spans full-stack development, mobile app creation, and cloud computing, with a strong foundation in multiple programming languages and frameworks",
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
