import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Archive() {
  return (
    <>
      <div className="centre-container Archive-container">
        <div className="table-container">
          <ul className="campaign-container">
            <li className="Title">Campaign</li>
            <li className="content">
              <Link to="/Arc1" smooth>
                Arc 1
              </Link>
            </li>
          </ul>
          <ul className="campaign-container">
            <li className="Title">Sketchbook</li>
            <li className="content">
              <Link to="/FromthegroundUp" smooth>
                "From the ground Up"
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Archive
