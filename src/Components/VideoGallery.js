import React from "react";
import guni from "./Videos/guni.mp4";
import mi from "./Videos/mi.mp4";
import marina from "./Videos/marina.mp4";
import residence from "./Videos/residence.mp4";
import christmas from "./Videos/christmas1.mp4";
// import travel from "./Videos/travel.webm";

const VideoGallery = () => {
  return (
    <>
      <div className="video-gallery">
        <div className="container-2">
          <h1>Video Gallery</h1>
          <div className="video-section">
            <div className="video-1">
              <iframe
                width="100%"
                height="100%"
                src={residence}
                title="video1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              
              ></iframe>
            </div>
            <div className="video-2">
              <iframe
                width="100%"
                height="100%"
                src={christmas}
                title="video2"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-3">
              <iframe
                  width="100%"
                  height="100%"
                  src={marina}
                  title="video3"
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
            </div>
            <div className="video-4">
              <iframe
                  width="100%"
                  height="100%"
                  src={guni}
                  title="video4"
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            <div className="video-5">
              <iframe
                width="100%"
                height="100%"
                src={residence}
                title="video5"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-6">
              <iframe
                width="100%"
                height="100%"
                src={marina}
                title="video6"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* <div className="portfolio-btn">
            <button className="btn btn-primary">PORTFOLIO</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
