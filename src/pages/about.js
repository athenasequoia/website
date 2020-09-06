import React from "react"
import SVG from "react-inlinesvg"
import iconac from "../images/academia-edu.svg"

const About = props => {
  return (
    <>
      <div className="introduction_self">
        <h2>
          Ma formation interdisciplinaire – histoire de l’art, sciences sociales
          - a façonné mes perceptions sur les œuvres d’art et mon activité
          d’enseignante constitue un gage de mon expérience dans la transmission
          des savoirs auprès du plus grand nombre. Diplômée d’Etat (agréée
          Ministère de la Culture) et Docteure en sciences sociales (EHESS,
          Paris), j’interviens dans 4 domaines :
        </h2>
        <h1>Domaine Culturel</h1>
        <p>
          Diplômée agrée de l’Ecole des guides conférenciers à l’Université
          d’Angers, j’ai travaillé pendant 8 ans dans le tourisme. J’ai intégré
          par la suite la Cité des sciences et de l’industrie en tant que
          médiatrice culturelle pendant 7 ans. Depuis 5 ans, je travaille en
          free-lance comme conférencière pour des agences culturelles à Paris au
          service des institutions et mécènes des expositions.
        </p>
        <h1>Podcast</h1>
        <p>
          {" "}
          Depuis mars 2020, j’ai crée Les Petites Conf-Inées, une série
          d’épisodes en ligne racontant l’histoire d’objets conservés dans des
          espaces muséographiques. Commençons par des objets du Musée du quai
          Branly – Jacques Chirac et tissons ensemble des liens de savoir et
          d’évasion. Je cherche à capter l’attention des Jeunes et Curieux sur
          des objets étranges au premier regard et des histoires qui les
          renvoient à des questions fondamentales telles que les origines, la
          mort, les rites de passage …
        </p>
        <h1>Enseignment</h1>
        <p>
          Ma formation pluridisciplinaire – double Masters en relations
          interculturelles à l’Université Paris 3 La Sorbonne Nouvelle et
          Sociologie à l’Ecole des Hautes Etudes en Sciences Sociales – m’a
          conduite à enseigner dans des établissements secondaires de
          l’Education nationale qu’ils soient classés pôles d’excellence ou zone
          prioritaire.
        </p>
        <h1>Recherche</h1>
        <p>
          Docteure en sciences sociales à l’Ecole des Hautes Etudes en Sciences
          Sociales – Paris, je suis spécialisée dans les stratégies de survie
          des minorités non-musulmanes au Moyen-Orient. Publications et
          contributions sont en ligne :
        </p>
        <a
          href="https://ehess.academia.edu/AnnaTheodorides"
          target="_blank"
          rel="noopener noreferrer"
          style=""
        >
          {" "}
          <SVG src={iconac} />
        </a>
      </div>
    </>
  )
}
export default About
