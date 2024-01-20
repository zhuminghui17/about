import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Brittany Chiang",
  afterName: ", a design-minded front-end software engineer focused on building beautiful interfaces & experiences ",
  contact: "Get in touch ",
  email: "brittany.chiang@gmail.com",
  mailTo: "mailto:brittany.chiang@gmail.com",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = event => {
    setIsHovering(true);
  };
  const onMouseOut = event => {
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
      <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut}></span>
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
