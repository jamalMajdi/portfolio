// src/components/Services.jsx
import React from "react";
import { FaTools, FaRocket, FaCode } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaTools />,
    title: "Web Design",
    description:
      "تصميم عصري وسهل الاستخدام يركّز على تجربة المستخدم ووضوح المحتوى.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    description:
      "سرعة تحميل عالية وتحسين كامل للأداء لضمان أفضل تجربة.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "كتابة كود منظم وسهل الصيانة، يتبع أفضل المعايير.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h3>What I Offer</h3>
      <h2>Services</h2>
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
