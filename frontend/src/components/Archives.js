import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Archives() {
  return (
    <>
      <div className="centre-container Archives-container">
        <table className="table-container">
          <thead className="Row-Container">
            <tr className="Title">
              <th>Campaign</th>
              <th>Sketchbook</th>
            </tr>
          </thead>
          <tbody>
            <tr className="Row-Container">
              <td data-cell="Campaign">
                <Link to="/Arc1" smooth>
                  Arc 1
                </Link>
              </td>
              <td data-cell="Sketchbook">
                <Link to="/FromthegroundUp" smooth>
                  "From the ground Up"
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Archives
