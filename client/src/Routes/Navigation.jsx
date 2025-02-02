import React from 'react'
import NavBar from "../Routes/Navbar.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About";
import Contact from "../pages/Contact.jsx";
import Home from '../pages/Home.jsx';
import Skills from "../components/Skills";

const Navigation = () => {
  return (
    <>
    <div className="overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  </>
  )
}

export default Navigation