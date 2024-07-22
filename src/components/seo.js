import * as React from "react"

const seoData = {
  "title": "Matt Zhu",
  "description": "Matt Zhu is a an expert in top-tier mobile/web app architecture & robust backend servers",
  "author": "Matt Zhu",
  "siteUrl": "https://mhzmat.netlify.app/",
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
