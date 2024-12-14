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
          <div className="navBar-container">
            <NavBar />
          </div>
          <Project />
          <div className="rightSidebar-container">
            <div className="sockText-container">
              <h5 className="sock-title">Bourbon</h5>
              <p className="sock-description">
                A sock is neither thought about or seen, however, it aids us in
                the comfort of moving around in our daily lives. The "from the
                ground up" collection by arcofta represents the start of the
                journey, the preliminary layering that prepares you for the road
                aheads, an easy journey was never promised.
              </p>
            </div>
            <footer className="footer-container">
              <h4>ARC1</h4>
              <p className="footer">"From the Ground Up"</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProjectLayout
