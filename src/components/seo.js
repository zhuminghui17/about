import * as React from "react"

const seoData = {
  "title": "Brittany Chiang | Developer",
  "description": "Brittany Chiang is a software engineer based in Boston, MA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  "author": "Brittany Chiang",
  "siteUrl": "https://brittanychiang.com",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
