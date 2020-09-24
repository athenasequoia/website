import React from "react"
import SVG from "react-inlinesvg"

import iconcoop from "../images/agreement.svg"
import SEO from "../components/seo.js"

const Contact = props => {
  return (
    <>
      <SEO title="Contact | Anna Theodorides, Guide Conferencier en histoire de l'art" />
      <div className="contact">
        <h4> Travaillons ensemble!</h4>
        <div className="iconcoop">
          {" "}
          <SVG src={iconcoop} />
        </div>
        <br></br>
        <br></br>

        <p>
          annatheoconf@gmail.com
          <br></br>
          <br></br>
          +33 615 488 692
        </p>
      </div>
    </>
  )
}

export default Contact
