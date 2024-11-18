import React from 'react'
import Contact from './Contact'
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
          <Contact />
        </div>
      </div>
    </>
  )
}
export default ContactLayout
