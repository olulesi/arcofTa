import React from 'react'
import Navbar from "./Navbar";
// import RightSidebar from "./RightSidebar";
import Arc1 from "./Arc1";
import Archives from "./Archives";
import banner from "../images/banner.png"


//Banner Image Needed

function Home() {

    return (
        <>
            <div className='main'>
                <div className='homeScreen-container frontPage'>
                    <div className='navBar-container'>
                        <Navbar />
                    </div>
                    <div className='banner centre-container'id='banner'>
                        <img src={banner} alt="banner" className="w-full h-full object-cover" />
                    </div>
                    <div className='rightSidebar-container'></div>
                    {/* 
                <section className="h-screen banner w-full">
                    <img src={banner} alt="banner" className="w-full h-full object-cover" />
                </section>
                <RightSidebar /> */}
                    {/* <Arc1 />
                <Archives /> */}
                </div>
                <div className='homeScreen-container arcs' id='arc1'>
                    <Arc1 />
                </div>
                <div className='homeScreen-container archives' id='archives'>
                    <Archives />
                </div>
            </div>
        </>
    );

}
export default Home