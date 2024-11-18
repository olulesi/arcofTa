import React from 'react'
import ScarfAnimation from '../images/ScarfAnimation.mp4'

function Contact() {
  return (
    <>
      <div className="Scarf-container">
        <div className="overlay"></div>
        <video src={ScarfAnimation} autoPlay loop muted />
        <div className="Contact-container">
          <a
            href="mailto: tobiajanaku1@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="details"
          >
            Email:
            <br />
            ARCOFTA@GMAIL.COM
          </a>
          <a
            href="https://www.instagram.com/arcof.ta/"
            target="_blank"
            rel="noreferrer"
            className="details"
          >
            INSTAGRAM:
            <br />
            ARCOF.TA
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
