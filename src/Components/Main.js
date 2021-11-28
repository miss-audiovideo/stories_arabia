import React from "react";
// import video from "./Videos/Shoes Ad.MOV";
import Videoone from "./Videos/residence.mp4";
const Main = () => {
  return (
    <>
      <video muted autoPlay loop className="video-container">
        <source src={Videoone} type="video/mp4" />
      </video>
      <div className="heading">
        <h1 className="animate__animated animate__fadeInUp animate__delay-2s">
          Stories Arabia
        </h1>
        <h3 className="animate__animated animate__fadeInUp animate__delay-4s">
          A one-stop site for all your digital marketing needs.
        </h3>
      </div>
      <div className="video-overlay"></div>
    </>
  );
};

export default Main;
