import React from "react";
import { Link } from 'react-router-dom'

import Midnight from "../images/Arc1/Midnight.png";
import Bourbon from "../images/Arc1/Bourbon.png";
import Sahara from "../images/Arc1/Sahara.png";
import Cocaine from "../images/Arc1/Cocaine.png";


const images = [
    { img: Midnight, bg: "#131419" ,title: 'Midnight'},
    { img: Bourbon, bg: "#5e493c", title: 'Bourbon' },
    { img: Sahara, bg: "#f2e0b2", title: 'Sahara' },
    { img: Cocaine, bg: "#f6f7f9", title: 'Cocaine' },
];
console.log(images[0].img)
const Arc1 = () => {
    return (
        <>
            <div className="centre-container arc1">
                <div className="title-container">
                    <h2 className="font-primary text-6xl ">ARC1</h2>
                    <p>"from the ground up"</p>
                </div>

                <div className="socks-container">
                    {images.map((image, index) => (
                        <Link
                            to={`/${image.title}`}
                            style={{backgroundColor: `${image.bg}`}} 
                            key={index}  
                            className={"sock"}
                        >
                            <img src={image.img} alt="" className="sock-img" />
                        </Link>
                    ))}
                </div>
                <div className="description-container">
                    <p className="">
                        A sock is neither thought about or seen, however, it aids us in the
                        comfort of moving around in our daily lives. The "from the ground up"
                        collection by arcofta represents the start of the journey, the
                        preliminary layering that prepares you for the road aheads, an easy
                        journey was never promised.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Arc1;