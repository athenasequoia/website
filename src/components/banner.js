import React, { useState, useEffect } from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import banner from "../styles/components/_banner.scss"

const Banner = props => {
  // setting the state of my banner component, usestate method returns an array which we have called open and setopen, first item = reader item, writer
  const [open, setOpen] = useState(false)
  useEffect(() => {
    console.log(open)
  }, [open])
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <div className="banner">
      <h1> Anna Theodorides </h1>
      <p> Guide Conférencier en histoire de l’art </p>
      <Menu isOpen={open} onStateChange={({ isOpen }) => setOpen(isOpen)} right>
        <Link to="/" onClick={closeMenu}>
          {" "}
          Accueil{" "}
        </Link>

        <Link to="/about" onClick={closeMenu}>
          {" "}
          Apropos{" "}
        </Link>
        <Link to="/services" onClick={closeMenu}>
          {" "}
          Services{" "}
        </Link>
        <Link to="/podcasts" onClick={closeMenu}>
          {" "}
          Podcast{" "}
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          {" "}
          Contact{" "}
        </Link>
      </Menu>
    </div>
  )
}
export default Banner
