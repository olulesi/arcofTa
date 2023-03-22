import React from "react";
import logo from "../images/ta.png"
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {

    return (
        <>
            <Link className="logo-container" to="/" smooth>
                <img src={logo} alt="logo" className="" />
            </Link>
            <div className="navContents-container">
                <Link to="#arc1" smooth>ARC1</Link>
                <Link to="#archives" smooth>Archives</Link>
                <Link to="#contact" smooth>About Us</Link>
            </div>
        </>
    )
}
export default NavBar