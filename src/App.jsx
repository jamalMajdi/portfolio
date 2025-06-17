import About from "./components/about/About";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="container"></div>
      <div style={{ position: "relative" }}>
        {/* <Navbar/> */}
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
