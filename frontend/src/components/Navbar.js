import React from 'react'
import logo from '../images/ta.png'
import { HashLink as Link } from 'react-router-hash-link'

function NavBar() {
  return (
    <>
      <Link className="logo-container" to="/" smooth>
        <img src={logo} alt="logo" className="" />
      </Link>
      <div className="navContents-container special-text">
        <Link to="/Archives" smooth>
          Archive.
        </Link>
        <Link to="/Contact" smooth>
          Contact
        </Link>
        <Link to="/About" smooth>
          About
        </Link>
      </div>
      <div className="footer-container"></div>
    </>
  )
}
export default NavBar
