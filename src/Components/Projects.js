import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h1>
          Our <span>Projects</span>
        </h1>
      </div>
      <div className="projects-description">
       
        <h3>
          We have worked on several projects since our inception in March 2021.
          We have created the inauguration video content of several hotels,
          malls and properties in the UAE.
        </h3>
        <div className="projects-list">
          <div className="projects-list-left">
          <div class="col-sm-6 ">
            <ul>
              <li className="project-links">St Regis Dubai The Palm</li>
              <li className="project-links">Circle Mall</li>
            </ul></div>
          </div>
          <div className="projects-list-right">
            <ul><div class="col-sm-6">
              <li className="project-links">Soft launch for Souk Al Marfa</li>
              <li className="project-links">Centara CDD</li>
            </div></ul>
          </div>
        </div>
      </div>
      <div className="projects-description">
        <h3>
          We have covered photoshoots across various communities including all
          their amenities spanning Dubai, such as:
        </h3>
        <div className="projects-list">
          <div className="projects-list-left">
          <div class="col-sm-4">
            <ul>
              <li className="project-links">Garden View Villas</li>
              <li className="project-links">Discovery Garden</li>
              <li className="project-links">Garden Apartment</li>
              <li className="project-links">Golden Mile 3</li>
              <li className="project-links">Al Furjan</li>
              <li className="project-links">Badrah</li>
            </ul>
          </div>
          <div className="projects-list-right">
          <div class="col-sm-4">
            <ul>
              <li className="project-links">Nad Al Sheba Village</li>
              <li className="project-links">International City</li>
              <li className="project-links">Jebel Ali Village</li>
              <li className="project-links">The Gardens</li>
              <li className="project-links">Souk warsan</li>
              <li className="project-links">Veneto</li>
            </ul></div>
          </div>
          <h3>
            Additionally, we have curated content for Delage D12, a hybrid
            street-legal sports hypercar produced by the French automobile
            manufacturer Delage and is a candidate to become the fastest
            road-legal car in the world.
          </h3>
        </div>
      </div>
    </div></div>
  );
};

export default Projects;
