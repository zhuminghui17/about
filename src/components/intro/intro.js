import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Matt Zhu",
  afterName: ", a software engineer with experience in full stack web development and mobile development.",
  contact: "Get in touch ",
  email: "mz223@duke.edu",
  mailTo: "mailto:mz223@duke.edu",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <h1 className="intro__hello">{introData.title}
      <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
    </h1>

    <h2 className="intro__tagline">{introData.beforeName}
      <span className="name">{introData.name}</span>{introData.afterName}
      <span className="emoji technologist"></span>
    </h2>

    <h3 className="intro__contact">
      <span>{introData.contact}</span>
      <span className="emoji pointer"></span>
      <span>
      <a href={introData.mailTo}
         className="highlight-link">{introData.email}</a>
    </span>
    </h3>
  </header>
};

export default Intro
