import React from 'react'
import NavBar from "../Routes/Navbar.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About";
import Contact from "../pages/Contact.jsx";
import Home from '../pages/Home.jsx';

const Navigation = () => {
  return (
    <>
    <div className="overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  </>
  )
}

export default Navigation