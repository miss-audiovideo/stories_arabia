import React from "react";
import guni from "./Videos/guni.mp4";
import mi from "./Videos/mi.mp4";
import marina from "./Videos/marina.mp4";
import shoes from "./Videos/shoes.MOV";
import residence from "./Videos/residence.mp4";
import christmas from "./Videos/christmas.mp4";

const VideoGallery = () => {
  return (
    <>
      <div className="video-gallery">
        <div className="container-2">
          <h1>Video Gallery</h1>
          <div className="video-section">
            <div className="video-section-1">
              <div className="video-1">
                <iframe
                  width="100%"
                  height="100%"
                  src={marina}
                  title="video1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-2">
                <iframe
                  className="a"
                  width="100%"
                  height="100%"
                  src={residence}
                  title="video2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="b"
                  width="100%"
                  height="100%"
                  src={guni}
                  title="video3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="c"
                  width="100%"
                  height="100%"
                  src={residence}
                  title="video4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="video-section-2">
              <iframe
                className="a"
                width="100%"
                height="100%"
                src={guni}
                title="video5"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="b"
                width="100%"
                height="100%"
                src={marina}
                title="video6"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="portfolio-btn">
            <button className="btn btn-primary">PORTFOLIO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
