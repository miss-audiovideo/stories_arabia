import React from "react";
import image from "./Images/feat-3.jpg";
import image2 from "./Images/feat-2.jpg";
// import image3 from "./Images/feat-3.jpg";

const Featured = () => {
  return (
    <>
      <div className="featured-services">
        <h1>Featured <span>Services</span></h1>
        <div className="featured-gallery">
          <div className="featured-block">
            <div className="set-1 pic">
              <img src={image} alt=""></img>
            </div>
            <div className="set-2 pic">
              <img src={image2} alt=""></img>
            </div>
            <div className="set-1 pic">
              <img src={image} alt=""></img>
            </div>
            <div className="set-2 pic">
              <img src={image2} alt=""></img>
            </div>
            <div className="set-1 pic">
              <img src={image} alt=""></img>
            </div>
            <div className="set-2 pic">
              <img src={image2} alt=""></img>
            </div>
            <div className="set-1 pic">
              <img src={image} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
