import React from "react"
import SVG from "react-inlinesvg"
import iconac from "../images/academia-edu.svg"
import iconlk from "../images/linkedin.svg"
import iconfb from "../images/facebook.svg"

const Contact = props => {
  return (
    <div className="contact">
      <h1> Travaillons ensemble!</h1>
      <p>annatheodorides@gmail.com</p>
      <p>portable : +33 615 488 692</p>
      <div className="icons">
        <a
          href="https://ehess.academia.edu/AnnaTheodorides"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SVG src={iconac} />
        </a>

        <a
          href="https://www.facebook.com/lespetitesconfinees"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SVG src={iconfb} />
        </a>
        <a
          href="https://www.linkedin.com/in/anna-theodorides-639816bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <SVG src={iconlk} />
        </a>
      </div>
    </div>
  )
}

export default Contact
