import React from 'react'
import Navbar from './Navbar'
// import RightSidebar from "./RightSidebar";
// import Arc1 from './Arc1'
// // import Archives from "./Archives";
// import AboutUs from './AboutUs'
import banner from '../images/banner.png'
import { HashLink as Link } from 'react-router-hash-link'

//Banner Image Needed
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  AOS.init()

  return (
    <>
      <div className="main">
        <div className="homeScreen-container">
          <div className="navBar-container non-fixed">
            <Navbar />
          </div>
          <Link
            to="/Arc1"
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
          </Link>
          <div className="rightSidebar-container">
            <h4>ARC1</h4>
            <p className="footer">"From the Ground Up"</p>
          </div>
        </div>
        {/* <div className="homeScreen-container arcs" id="arc1">
          <Arc1 />
        </div> */}
        {/* <div className='homeScreen-container archives' id='archives'>
                    <Archives />
                </div> */}
        {/* <div className="homeScreen-container banner" id="aboutUs">
          <AboutUs />
        </div> */}
      </div>
    </>
  )
}
export default Home
