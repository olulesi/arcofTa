import React from 'react'
import Project from './Project'
import NavBar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectLayout() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container non-fixed">
            <NavBar />
          </div>
          <Project />
          <div className="rightSidebar-container">
            <h4>ARC1</h4>
            <p className="footer">"From the Ground Up"</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProjectLayout
