/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
 
"Passionate BTech student specializing in Full stack web development and software engineering, with a focus on creating responsive and user-friendly applications.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "MERN Developer",
  "Responsive web design",
  "Frontend development",
  "Data structures & algorithms",
  "Java programming",
  "JavaScript (React, Bootstrap)",
  "Python (Basic knowledge)",
  "HTML5",
  "CSS3",
  "Version control (Git)",
  "WordPress ",
];

const detailOrQuote =
 "With a strong foundation in web development and software engineering, I am driven by a passion for building intuitive and responsive applications. My expertise spans React, JavaScript, Bootstrap, and Java, and I am committed to continuously expanding my skill set in areas like machine learning. Whether it's designing sleek web interfaces in Figma or developing efficient, user-centered solutions, I thrive on turning ideas into impactful digital experiences.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
