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
              <h1>About Us</h1>
              <hr />
              <p> We are a result-oriented, all-in-one digital marketing agency that helps you bring in high-quality traffic and boost your sales with our personalized strategic marketing campaigns.
</p>
              <p>We create content that’s inspiring, thought-provoking, and visually compelling by combining a data-driven approach with knowledge gained from years in digital marketing to deliver outstanding results to our clients.
We work closely with all our clients to create visible results through our expertise in digital strategy and performance-driven marketing.</p>
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
