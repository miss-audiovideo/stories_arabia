import React from "react";
import image from "./Images/feat-1.jpg";
import MapContainer from "./mapAPI";

const Blog = () => {
  const containerStyle = {
    position: "relative",
    width: "25vw",
    height: "100%",
  };

  return (
    <>
      <div className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h1>
              Video <span>Blog</span>
            </h1>
            <h5>
              Read our blog for the latest in hi-tech, forward-thinking video
              marketing strategies. Subscribe to our newsletter and get a first
              hand look at valuable insights about using video for your brand.{" "}
            </h5>
          </div>
          <div className="blog-content">
            <div className="blog-left">
              <img src={image} alt="blog" />
              <div className="blog-date">
                <h3>How to Get More Comfortable in Front of the Camera? </h3>
                <h4>17/11/2021</h4>
              </div>
            </div>
            <div className="blog-right">
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>
                  You’ve decided to incorporate videos into your marketing
                  strategy and have started
                </p>
                <div className="blog-btn" type="button">
                  Read More
                </div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>
                  You’ve decided to incorporate videos into your marketing
                  strategy and have started
                </p>
                <div className="blog-btn" type="button">
                  Read More
                </div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>
                  You’ve decided to incorporate videos into your marketing
                  strategy and have started
                </p>
                <div className="blog-btn" type="button">
                  Read More
                </div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>
                  You’ve decided to incorporate videos into your marketing
                  strategy and have started
                </p>
                <div className="blog-btn" type="button">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="titles">GET IN TOUCH</h1>
      <div class="content">
        <div class="contact-info">
          <ul>
            <li>
              <div class="circle">
                <i class="fas fa-home"></i>
              </div>{" "}
              Premises No.: EO 08, Floor: 1,
              <br /> Building: In5 Media
              <br />
              Dubai,United Arab Emirates
            </li>
            <li>
              <div class="circle">
                <i class="fas fa-phone"></i>
              </div>{" "}
              +971 55 555 4836
            </li>
            <li>
              <div class="circle">
                <i class="fas fa-envelope"></i>
              </div>{" "}
              info@storiesarabia.com
            </li>
            <li>
              <div class="circle">
                <i class="fas fa-clock"></i>
              </div>{" "}
              Mon - Fri 8:00 AM to 4:00 PM
            </li>
          </ul>
          <div class="contact-section" style={containerStyle}>
            {/*  <input type="text" placeholder="Name"/>*/}
            {/*<input type="email" placeholder="E-mail"/>*/}
            {/*<textarea placeholder="Write your message..."></textarea>*/}
            {/*<input type="submit" value="Send"/>*/}

            {/*add google maps here*/}
            <MapContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
