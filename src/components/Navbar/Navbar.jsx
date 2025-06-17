// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="navbar-logo">Bzog</h1>
//       <ul className="navbar-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#Skills">Skills</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#Projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Bzog</h1>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
