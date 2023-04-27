import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from "../pages/About";
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import Partners from '../pages/Partners';
import Hero from './Hero';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero></Hero>
      <Services />
      <About />
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage