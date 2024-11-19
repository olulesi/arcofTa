import React from 'react'
import About from './About'
import NavBar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactLayout() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container">
            <NavBar />
          </div>
          <About />
          <div className="rightSidebar-container">
            <h4 className="special-text">ARCOFTA</h4>
          </div>
        </div>
      </div>
    </>
  )
}
export default ContactLayout
