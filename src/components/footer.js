import React from "react"
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
          <br></br>

          <p> Copyright © 2020 Athéna Vassilopoulos </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
