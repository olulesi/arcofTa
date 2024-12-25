import React from "react";
import Navbar from "../Navbar";
import Socks from "./Socks"
import Archives from "../Archives";
// import Contact from "../Contact";

const Midnight = () => {
    return (
        <div className='main'>
            <div className='homeScreen-container frontPage'>
                <div className='navBar-container'>
                    <Navbar />
                </div>
                <div className='centre-container midnight' id='banner'>
                    <h2 className="arcSock-title">
                        Midnight
                    </h2>
                    <Socks />
                </div>
                <div className='rightSidebar-container'></div>
            </div>
            <div className='homeScreen-container arcs' id='arc1'>
                <div className="arcVideo-container">
                    
                </div>
            </div>
            <div className='homeScreen-container archives' id='archives'>
                <Archives />
            </div>
        </div>
    );
};
export default Midnight;