import React from "react";
import image from "./Images/service-img.jpg";
import imagebg from "./Images/Image-1.jpg";

const Service = () => {
  return (
    <>
      <div className="service-section">
        <div className="container">
          <div className="service-layout">
            <div className="service-images">
              <img src={imagebg} alt="service" className="back-img" />
              <div className="service-image">
                <img src={image} alt="service" className="front-img" />
              </div>
            </div>
            <div className="service-text">
              <h1>New Evolution Videos</h1>
              <h2>OUR MISSION IS TO CREATE, INNOVATE AND TRANSFORM.</h2>
              <hr />
              <p>From Virtual and Augmented Reality to AI and drones, we constantly embrace the latest cutting-edge technology to deliver exceptional video production services. </p>
              <p>The powerful and transformative medium of visual storytelling is at the root of our mission. We create content that’s inspiring, thought provoking and visually compelling, while maximizing your company’s ROI.</p>
              <div className="service-btn">
                <button className="btn btn-primary">Our Services</button>
                <button className="btn btn-primary">Contact Us</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
