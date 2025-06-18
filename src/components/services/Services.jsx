// src/components/Services.jsx
import React from "react";
import { FaTools, FaRocket, FaCode } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaTools />,
    title: "Web Design",
    description:
      "Modern and user-focused designs that combine aesthetics with usability.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    description:
      "Built and optimized websites for high performance and fast loading times to deliver seamless user experiences.",
  },
  {
    icon: <FaCode />,
    title: "Responsive Design",
    description:
      "Responsive layouts that adapt perfectly to all devices, from desktops to smartphones.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h3 className="small-title">What I Offer</h3>
      <h2 className="big-title">Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" data-aos="fade-up" key={i}>
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
