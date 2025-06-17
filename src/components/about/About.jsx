import React from "react";
import "./about.css";

import ImageMe from "../../assets/me-about.jpg";
import JamalAbout from '../../assets/jamal-about.png'

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <div className="tob-section">
          <h5>Go To K</h5>
          <h2>About Me</h2>
        </div>

        <div className="about-container container">
          <div className="about-me">
            <div className="image-about">
              <img src={JamalAbout} alt="" />
            </div>
          </div>

          <div className="about-content">
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <FaAward />
                </div>
                <h5>Experience</h5>
                <small>2+ years working</small>
              </div>
              <div className="card">
                <div className="icon">
                  <FiUsers />
                </div>
                <h5>Clients</h5>
                <small>200+ worldwide</small>
              </div>
              <div className="card">
                <div className="icon">
                  <VscFolderLibrary />
                </div>
                <h5>Projects</h5>
                <small>80+ completed</small>
              </div>
            </div>
            <p className="info-about">
              I'm a Front End Developer with a passion for creating dynamic and
              responsive web applications. I specialize in React.js and have
              experience with various front-end technologies. My goal is to
              build user-friendly interfaces that provide an exceptional user
              experience.
            </p>
            <a href="" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
