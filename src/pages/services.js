import React from "react"
import SEO from "../components/seo.js"

const Services = props => {
  return (
    <>
      <SEO title="Services | Anna Theodorides, Guide Conferencier en histoire de l'art" />

      <div className="services_presentation">
        <h1> Services </h1>
        <p>
          Conférencière et enseignante d’histoire/géographie et histoire des
          arts, la transmission des savoirs est cœur de ma démarche. Les visites
          que je propose s’attachent à donner des clés de compréhension des
          œuvres d’art et leurs enjeux sociaux à la lumière de l’actualité.
          <br></br>
          Je propose des visites des grandes expositions parisiennes, des
          conférences en salle et des parcours thématiques ajustés à votre
          convenance.
        </p>

        <h2>In situ ou en salle</h2>
        <p>
          Visites des collections permanentes et des expositions temporaires du
          Musée du Louvre, Musée du quai Branly, Centre G. Pompidou, Grand
          Palais, Petit Palais, Musée National Pablo Picasso-Paris, Cité de
          l’architecture et du patrimoine, Musée d’Orsay, Orangerie, Musée des
          arts décoratifs
          <br></br>
          <br></br>
          Quelques idées de visites thématiques : Masques et rites de passage au
          musée du quai Branly, Luxe et Luxure au musée du Louvre, Histoire de
          la couleur au musée d’Orsay, Du noir à la lumière chez Soulages, La
          machine au Centre Pompidou, L’eau au musée de l’Orangerie,
          L’électricité chez les Impressionnistes, Art et Société au musée
          d’Orsay, une histoire des meubles au musée des arts décoratifs.
        </p>
        <h2>En plein air</h2>
        <p>
          Promenades de la butte Montmartre, Saint-Germain-des-Prés, îles de la
          Cité/Saint-Louis, Palais royal-Louvre –Tuileries ou dans le Marais.
        </p>
      </div>
    </>
  )
}

export default Services
