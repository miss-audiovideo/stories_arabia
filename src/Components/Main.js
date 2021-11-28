import React from "react";
import video from "./Videos/Shoes Ad.MOV";

const Main = () => {
  return (
    <>
      <video muted autoPlay loop className="video-container">
        <source src={video} type="video/mp4" />
      </video>
      <div className="heading">
        <h1 className="animate__animated animate__fadeInUp animate__delay-2s">
          Stories Arabia
        </h1>
        <h3 className="animate__animated animate__fadeInUp animate__delay-4s">
          An In5 incubated digital marketing startup aimed to solve your content development and influencer marketing needs.
        </h3>
      </div>
      <div className="video-overlay"></div>
    </>
  );
};

export default Main;
