import React from 'react'
import Navbar from './Navbar'
import banner from '../images/banner.png'

//Banner Image Needed
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container">
            <Navbar />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="banner centre-container"
            id="banner"
          >
            <img
              src={banner}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rightSidebar-container">
            <h4>ARC1</h4>
            <p>"From the Ground Up"</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
