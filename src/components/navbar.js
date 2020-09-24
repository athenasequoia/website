import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/"> Accueil </Link>
        </li>
        <br></br>
        <li>
          <Link to="/about"> A propos </Link>
        </li>
        <br></br>
        <li>
          <Link to="/services"> Services </Link>
        </li>
        <br></br>
        <li>
          <Link to="/podcasts"> Podcast </Link>
        </li>
        <br></br>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
