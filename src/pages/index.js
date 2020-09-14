import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo.js"

const Home = props => {
  return (
    <>
      <SEO title="Accueil | Anna Theodorides, Guide Conferencier en histoire de l'art" />
      <div className="accueil">
        <h1>
          Une approche <br></br>
          <span className="emphasis">
            interculturelle et interdisciplinaire des arts
          </span>{" "}
          <br></br> pour vous, votre entreprise <br></br> ou votre famille.
        </h1>
      </div>
    </>
  )
}

export default Home
