import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import  Header  from './components/Header/Header';
import About  from './components/About/About';
import Projects  from './components/Projects/Projects';
import  Skills  from './components/Skills/Skills';
import  Home  from './components/Home/Home';
import  Contact from './components/Contact/Contact';
import  NotFound  from './components/NotFound/NotFound';
import Footer  from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}


export default App;
