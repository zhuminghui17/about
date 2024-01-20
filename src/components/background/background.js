import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "I'm currently an Engineer at ",
  part2: "Upstatement",
  part2Href: "https://www.upstatement.com/",
  part3: " building things for the web with some awesome people. I recently graduated from ",
  part4: "Northeastern University",
  part4Href: "https://www.ccis.northeastern.edu/",
  part5: " after completing three awesome six-month co-ops at ",
  part6: "MullenLowe U.S. ",
  part6Href: "https://us.mullenlowe.com/",
  part7: "Starry",
  part7Href: "https://starry.com/",
  part8: ", and ",
  part9: "Apple Music",
  part9Href: "https://www.apple.com/music/",
  line2: "As a software engineer, I enjoy bridging the gap between engineering and design - combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2: ", I'm probably snowboarding, cruising around on my penny board, or crossing off another item on my bucket list.",
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
        <a className="underline-link" href={backgroundData.part6Href} target="_blank" rel="noreferrer">{backgroundData.part6}</a>,
        <a className="underline-link" href={backgroundData.part7Href} target="_blank" rel="noreferrer">{backgroundData.part7}</a>
        {backgroundData.part8}
        <a className="underline-link" href={backgroundData.part9Href} target="_blank" rel="noreferrer">{backgroundData.part9}</a>.
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
