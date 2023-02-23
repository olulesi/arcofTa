import React from "react";
import logo from "../images/ta.png"
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {

    return (
        <>
            <Link className="logo-container" to="/" smooth>
                <img src={logo} alt="logo" className="" />
            </Link>
            <div className="contents-container">
                <Link to="#arc1" smooth>ARC1</Link>
                <Link to="#archives" smooth>Archives</Link>
                <Link to="#contact" smooth>Contact us</Link>
            </div>
        </>
    )
}
export default NavBar