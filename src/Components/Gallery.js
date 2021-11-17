import React from "react";
import image from "./Images/truffle.png";

const Gallery = () => {
  return (
    <>
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
            <div className="slide">
              <img src={image} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
