import React from "react";
import JoshuaMohammed from "../images/Archive/JoshuaMohammed.png";
import Damned from "../images/Archive/Face.jpg";
import EquiHouse from "../images/Archive/ModelBreakdown.png";


const archives = [
  { img: JoshuaMohammed, text: "Joshua Mohamed" },
  { img: Damned, text: "TOG" },
  { img: EquiHouse, text: "Equi-House" },
];

const Archives = () => {
  return (
    <section className="archives centre-container">
      <h2 className="">Archives</h2>
      <div className="archives-container">
        {archives.map((archive, index) => (
          <div
            key={index}
            className="archive"
          >   
              <img
                src={archive.img}
                alt=""
                className=""
              />
            <p
              className=""
            >
              {archive.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archives;