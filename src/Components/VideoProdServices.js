import React from "react";
import videoIcon from "./Images/icons/video_library_black_24dp.png";
import reviewIcon from "./Images/icons/outline_reviews_black_24dp.png";
// import buildingIcon from "./Images/icons/outline_location_city_black_24dp.png";
import starIcon from "./Images/icons/outline_star_border_black_24dp.png";
// import studioIcon from "./Images/icons/outline_video_camera_front_black_24dp.png";
import vrIcon from "./Images/icons/vr.png";

const VideoProdServices = () => {
  return (
    <>
      <div className="video-gallery">
        <div className="container-2">
          <div className="heading-container">
            <div className="services-heading position-relative">
              Video Production Services
            </div>
          </div>
          <div className="video-services-section">
            <div className="video-services-item">
              <div>
                <img src={videoIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Influencer Marketing
</h3>
              <p>
              We’ll help you bring in the right influencers for your business to deliver real engagement and make a positive impact on your sales.


              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={starIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Promotion Campaigns using Social media Influencers</h3>
              <p>
              Our cross-functional team will help deliver strategic campaigns using social media influencers that are designed to keep your business at the top of your customers' minds.

              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={reviewIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Product Launch Strategies using Social media Influencers</h3>
              <p>
              We’ll help you prepare for a successful launch by curating an end to end marketing plan to successfully announce your product to the world.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={vrIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Brand Activation Campaigns using Social media Influencers
</h3>
              <p>
              Let it be building and deepening your relationship with your clients or transforming the perception of your brand, we’ll create brand activation solutions that run the extra mile.


              </p>
            </div>
          </div>
          <button className="our-services-btn">Our Services</button>
        </div>
      </div>
    </>
  );
};

export default VideoProdServices;
