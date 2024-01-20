import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import Switch from "../components/switch/switch";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import FeaturedProjects from "../components/featured-projects/featured-projects";
import OtherProjects from "../components/other-projects/other-projects";
import Footer from "../components/footer/footer";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<Switch />*/}
    <Intro />
    <Background />
    <Skills />
    <Experience />
    <FeaturedProjects />
    <OtherProjects />
    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
