import React from 'react'
import Project from './AboutUs'
import NavBar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectLayout() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container">
            <NavBar />
          </div>
          <Project />
          <div className="rightSidebar-container">
            <div className="sockText-container">
              <h5 className="sock-title">Bourbon</h5>
              <p className="sock-description">
                My project delves into the complex realm of estate regeneration
                in the UK, dissecting the adopted placemaking model and its
                evolution over time. I propose "Hood Futurism" as an alternative
                redevelopment approach that intertwines retrofitting structures
                with slow urbanism, focusing on curating communities based on
                heritage for the site.
              </p>
            </div>
            <footer className="footer-container">
              <h4>ARC1</h4>
              <p>"From the Ground Up"</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProjectLayout
