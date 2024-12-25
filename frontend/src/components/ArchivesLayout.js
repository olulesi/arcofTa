import React from 'react'
import Archives from './Archive'
import NavBar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ArchivesLayout() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container non-fixed">
            <NavBar />
          </div>
          <Archives />
          <div className="rightSidebar-container">
            <h4 className="special-text">ARCOFTA</h4>
          </div>
        </div>
      </div>
    </>
  )
}
export default ArchivesLayout
