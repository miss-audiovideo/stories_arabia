import React from "react";
import video from "./Videos/shoes.MOV";

const ContactHeader = () => {
  return (
    <>
      <video muted autoPlay loop className="video-container">
        <source src={video} type="video/mp4" />
      </video>
      <div className="contact-heading">
        <h1 className="animate__animated animate__fadeInUp animate__delay-2s">
          Talk To Us!
        </h1>
        <h3 className="animate__animated animate__fadeInUp animate__delay-4s">
        We craft compelling narratives that drive results. Let's tell your brand's story together.
        </h3>
        <h5 className="animate__animated animate__fadeInUp animate__delay-6s">
          Give us a call or fill out the email form below.
        </h5>
      </div>
    </>
  );
};

export default ContactHeader;
