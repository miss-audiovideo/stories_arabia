import React from "react";
import image from "./Images/feat-1.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h1>
              Video <span>Blog</span>
            </h1>
            <h5>Read our blog for the latest in hi-tech, forward-thinking video marketing strategies. 
Subscribe to our newsletter and get a first hand look at valuable insights about using video for your brand. </h5>
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
                <p>You’ve decided to incorporate videos into your marketing strategy and have started</p>
                <div className="blog-btn" type="button">Read More</div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>You’ve decided to incorporate videos into your marketing strategy and have started</p>
                <div className="blog-btn" type="button">Read More</div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>You’ve decided to incorporate videos into your marketing strategy and have started</p>
                <div className="blog-btn" type="button">Read More</div>
              </div>
              <div className="blog-box">
                <h3>Why Should Your Business Be on TikTok? </h3>
                <h4>17/11/2021</h4>
                <p>You’ve decided to incorporate videos into your marketing strategy and have started</p>
                <div className="blog-btn" type="button">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
