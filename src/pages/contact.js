import React from "react"
import SVG from "react-inlinesvg"
import icon from "../images/academia-edu.svg"

const Contact = props => {
  return (
    <div className="contact">
      <h1> Travaillons ensemble!</h1>
      <p>annatheodorides@gmail.com</p>
      <p>portable : +33 615 488 692</p>

      <a
        href="https://ehess.academia.edu/AnnaTheodorides"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <SVG src={icon} />
      </a>
    </div>
  )
}

export default Contact
