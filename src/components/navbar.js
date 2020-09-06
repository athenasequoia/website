import React from "react"
import { Link } from "gatsby"

const Navbar = props => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/about">Apropos</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/podcasts">Podcast</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
