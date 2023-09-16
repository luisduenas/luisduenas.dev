import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, social, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    social: social.twitter,
  }
  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      <meta name="twitter:creator" content={seo.social} />
      {/* <link rel="icon" href="src/images/wallaby.png" /> */}
      {children}
    </>
  )
}

export default SEO