import React from "react";
import Me from "../../assets/me.png";
import Jamal from '../../assets/jamal-removebg-preview.png'
import CV from "../../assets/cv.pdf";
import "./home.css";

// social icon
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar />
      <div className="home" id="home">
        <div className="container home-container">
          <div className="info-me">
            <div className="text">
              <h4>Hello I'm</h4>
              <h1 className="my-name">Jamal Magdy</h1>
              <h3 className="text-light">A Front End Developer</h3>
            </div>

            <div className="btns">
              <a href={CV} download className="btn btn-secondary">
                Download CV
              </a>
              <a href="#about" className="btn btn-primary">
                Let's Talk
              </a>
              {/* <a href="#projects" className="btn btn-secondary">Projects</a>
        <a href="#about" className="btn btn-primary">About Me</a> */}
            </div>

            <div className="social-icon">
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </div>
          </div>
          <div className="me">
            <img src={Jamal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
