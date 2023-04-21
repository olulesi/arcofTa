import React from 'react'
import Navbar from "./Navbar";
// import RightSidebar from "./RightSidebar";
import Arc1 from "./Arc1";
// import Archives from "./Archives";
import AboutUs from './AboutUs';
import banner from "../images/banner.png"

//Banner Image Needed

function Home() {

    return (
        <>
            <div className='main'>
                <div className='homeScreen-container'>
                    <div className='navBar-container'>
                        <Navbar />
                    </div>
                    <div className='banner centre-container'id='banner'>
                        <img src={banner} alt="banner" className="w-full h-full object-cover" />
                    </div>
                    <div className='rightSidebar-container'>
                        <h4>ARC1</h4>
                        <p>"From the Ground Up"</p>
                    </div>
                </div>
                <div className='homeScreen-container arcs' id='arc1'>
                    <Arc1 />
                </div>
                {/* <div className='homeScreen-container archives' id='archives'>
                    <Archives />
                </div> */}
                <div className='homeScreen-container banner' id='aboutUs'>
                    <AboutUs />
                </div>
            </div>
        </>
    );

}
export default Home