import React from "react"
import { Link, graphql } from "gatsby"

//data is what comes back from the query
const Podcast = ({ data }) => {
  //on line 9, if 8-10, it will attempt to find a node in html that doesnt exist > break website
  const mark =
    data.allMarkdownRemark.edges.length > 0
      ? data.allMarkdownRemark.edges[0].node.html
      : "<p> Oooooops </p>"

  return (
    <div className="PodcastIntrod">
      <h1>Les Petites Conf-Inées</h1>
      <br></br>
      <h2>– des objets à écouter, des histoires à raconter –</h2>
      <h3>
        Une série d’histoires venues d’ailleurs pour les enfants à partir de 7
        ans et jeunes curieux. Chaque épisode est dédié à un objet exposé dans
        nos musées et recèle une histoire universelle. Leur narration permet à
        vous et vos enfants de vous échapper vers un lointain géographique ou
        temporel. Si ces objets sont conservés dans des espaces muséographiques,
        il demeure possible de les écouter. Commençons par des objets du Musée
        du quai Branly – Jacques Chirac et tissons ensemble des liens de savoir
        et d’évasion. Les Petites Conf-Inées suivent un découpage géographique,
        selon les aires culturelles où vivent différents peuples autochtones.
        Ils sont à l’origine de confection d’objets extra-occidentaux, conservés
        et mis en valeur au Musée du quai Branly – Jacques Chirac. A ce jour,
        sept épisodes d’une saison visent à valoriser les différents objets –
        mât totémique, masques, bouclier, peintures sur bois etc. – exposés sous
        vitrine au musée du quai Branly – Jacques Chirac. Ils proviennent de
        trois aires culturelles : l’Amérique, l’Afrique et l’Océanie (les objets
        d’Océanie étant les plus nombreux)
      </h3>
      <div dangerouslySetInnerHTML={{ __html: mark }}></div>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default Podcast
