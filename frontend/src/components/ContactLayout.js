import React from 'react'
import Contact from './Contact'
import NavBar from './Navbar'
import ScarfAnimation from '../images/ScarfAnimation.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactLayout() {
  AOS.init()

  return (
    <>
      <div className="main homeScreen-container">
        <div className="overlay"></div>
        <video
          className="overlay-video"
          src={ScarfAnimation}
          autoPlay
          loop
          muted
        />
        <div className="navBar-container overlay-fix">
          <NavBar />
        </div>
        <Contact />
      </div>
    </>
  )
}
export default ContactLayout
