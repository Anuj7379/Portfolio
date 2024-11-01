

import React from "react";
import image from "../images/PortFolioHome1.jpeg";

const imageAltText = "preparing plan on notebook via writing using pen";

const projectList = [
  {
    title: "School WebSite ",
    description:
      "The School Website is a comprehensive platform for students, parents, and faculty, offering easy access to admissions, academic resources, events, and student portals. Designed for effective communication and streamlined administration, it keeps the school community connected with up-to-date information and resources in one accessible place.",
    url: "https://github.com/Anuj7379/SchoolWebsiteProject",
  },
  {
    title: "YOUR NOTES",
    description:
      "A Notes Website is an organized online platform that allows users to create, manage, and share notes efficiently. This site can serve students, professionals, or anyone looking to organize information in a structured format.",
    url: "https://github.com/Anuj7379/Your_Not",
  },
  {
    title: "Login & Sign up ",
    description:
      "Developed Login signup in which We put Login , Signup and delete user features",
    url: " https://github.com/Anuj7379/LOGIN_BACKEND_CODE",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
