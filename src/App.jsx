import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Demo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
