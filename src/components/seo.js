import React from "react"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet-async"
import geima from "../../static/batc.jpeg"

const SEO = ({ title, description, image, keywords }) => {
  const { pathname, origin } = useLocation() // origin = base URL, pathname = after slash, useLocation no matter what page I am on, it will look at URL

  const defaults = {
    title: "Anna Theodorides, Guide Conférencier en histoire de l'art",
    description:
      "Anna Theodorides vous offre une visite vivante des objets d’art à la lumière des enjeux du présent.",
    keywords:
      "Conférences, Visites, Sorties à Paris, Expositions à Paris, Collections des musées parisiens, Podcast, Petites Conf-Inées, Musée du quai Branly, Art extra-occidental",
  }
  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: `${origin}${image || geima}`,
    url: `${origin}${pathname}`,
    keywords: keywords || defaults.keywords,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

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
