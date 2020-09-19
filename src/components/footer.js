import React from "react"
import iconac from "../images/academia-edu.svg"
import iconlk from "../images/linkedin.svg"
import iconfb from "../images/facebook.svg"
import SVG from "react-inlinesvg"

const Footer = props => {
  return (
    <div className="footer">
      <div className="alliconswrapper">
        {" "}
        <div className="allicons">
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
    </div>
  )
}
export default Footer
