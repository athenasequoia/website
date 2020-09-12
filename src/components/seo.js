import React from "react"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet-async"
import geima from "../../static/batc.jpeg"

// siteMetadata: {
//   title: "Anna Theodorides",
//   siteUrl: "https://www.annatheo.fr",
//   description:
//     "Anna Theodorides vous offre une visite vivante des objets d’art à la lumière des enjeux du présent.",
// },

const SEO = ({ title, description, image }) => {
  const { pathname, origin } = useLocation()

  const siteUrl = "www.com"
  const defaults = {
    title: "Anna Theodorides",
    description:
      "Anna Theodorides vous offre une visite vivante des objets d’art à la lumière des enjeux du présent.",
  }
  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: `${origin}${image || geima}`,
    url: `${origin}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
