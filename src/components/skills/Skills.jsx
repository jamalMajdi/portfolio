// SkillsExperience.jsx
import React from 'react';
import './skill.css';
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiFigma } from 'react-icons/si';

const skills = [
  { icon: <FaCss3Alt color="#3b82f6" size={40} />, title: 'CSS', subtitle: 'User Interface' },
  { icon: <SiJavascript color="#facc15" size={40} />, title: 'JavaScript', subtitle: 'Interaction' },
  { icon: <FaReact color="#61dafb" size={40} />, title: 'React', subtitle: 'Framework' },
  { icon: <SiTailwindcss color="#38bdf8" size={40} />, title: 'TailwindCSS', subtitle: 'User Interface' },
  { icon: <FaNodeJs color="#10b981" size={40} />, title: 'NodeJS', subtitle: 'Web Server' },
  { icon: <SiFigma color="#a855f7" size={40} />, title: 'Figma', subtitle: 'Design tool' },
  { icon: <SiExpress color="#fff" size={40} />, title: 'ExpressJS', subtitle: 'Node Framework' },
  { icon: <SiMongodb color="#16a34a" size={40} />, title: 'MongoDB', subtitle: 'Database' },
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h3 className="skills-title">What Skills I Have</h3>
      <h2 className="skills-subtitle">My Experience</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" data-aos="fade-up" key={index}>
            {skill.icon}
            <h4>{skill.title}</h4>
            <p>{skill.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}