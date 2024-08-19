import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Components/pages/About/About';
import Events from './Components/pages/Events/Events';
import News from './Components/pages/News/News';
import OfficeBearer from './Components/pages/Officebearers/OfficeBearer';
import Home from './Components/pages/Home/Home';
import Contact from './Components/pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ParticlesComponent from './Components/Particles/ParticlesComponent';
import Obs from './Components/pages/Obs/Obs';
import ScrollToTop from './Components/ScrollToTop';
import Matrixz from './Components/pages/Events/Ctf/Matrixz';

const App = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/office-bearers" element={<OfficeBearer />} />
        <Route path='/all-ob' element={<Obs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/codewars" element={<Matrixz />}/>
        <Route path="*" element={<h1 className='not-found'>Page Not Found<br></br> Error 404 </h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
