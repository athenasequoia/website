import React from "react"

// Importing local components
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Banner from "../components/banner"

// Importing the master style
import "../styles/index.scss"

export default ({children}) => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className="page-container">
        {children}
      </div>  
      <Footer/>
    </div>
  )
}
