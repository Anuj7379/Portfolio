// homepage // 

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/HomePage.webp";

const imageAltText = "background consists of a table with books and pots on it";

const Home = ({ name = "", title = "" }) => { // Use default parameters here
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#footer">
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </a>
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

