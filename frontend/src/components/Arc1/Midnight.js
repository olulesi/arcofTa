import React from "react";
import Navbar from "../Navbar";
import Socks from "./Socks"

const Midnight = () => {
    return (
        <div className='main'>
            <div className='homeScreen-container frontPage'>
                <div className='navBar-container'>
                    <Navbar />
                </div>
                <div className='centre-container midnight' id='banner'>
                    <h2 className="">
                        Midnight
                    </h2>
                    <Socks />
                </div>
                <div className='rightSidebar-container'></div>
            </div>
            <div className='homeScreen-container arcs' id='arc1'>
            </div>
            <div className='homeScreen-container archives' id='archives'>
            </div>
        </div>
    );
};
export default Midnight;