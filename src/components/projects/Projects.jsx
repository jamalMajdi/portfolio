// Portfolio.jsx
import React from "react";
import "./projects.css";

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


import apiWeather from '../../assets/api-weather.png'
import latestNews from '../../assets/latest news.png'
import prayersTime from '../../assets/prayers-time.png'

const portfolioItems = [
  {
    id: 1,
    image: prayersTime,
    title: 'Prayers Time App',
    github: 'https://github.com/jamalMajdi/Prayers-Time',
    demo: 'https://prayers-time-xi.vercel.app/'
  },
  {
    id: 2,
    image: apiWeather,
    title: 'Weather Api App',
    github: 'https://github.com/jamalMajdi/api-weather',
    demo: 'https://prayers-time-kc97.vercel.app/'
  },
  {
    id: 3,
    image: latestNews,
    title: 'Latest News App',
    github: 'https://github.com/jamalMajdi/Latest-News',
    demo: 'https://latest-news-kjtm1p5ba-jamal-majdys-projects.vercel.app/'
  },
  
];

const Projects = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">My Recent Work</h2>
      <p className="portfolio-subheading">Portfolio</p>
      <div className="portfolio-grid">
        {portfolioItems.map(({ id, title, image, github, demo }) => (
          <div className="portfolio-card" data-aos="fade-up" key={id}>
            <img src={image} alt={title} className="portfolio-image" />
            <h3 className="portfolio-title">{title}</h3>
            <div className="portfolio-buttons">
              <a href={github} className="btn btn-outline" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={demo} className="btn btn-filled" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
