import { useState } from 'react';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// import Home from './pages/Home'

import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import Resume from './pages/Resume';

// import Project from './pages/Project';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/project/:projectId" element={<Project />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} />/ */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
