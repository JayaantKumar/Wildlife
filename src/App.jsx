// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Safaris from './pages/Safaris';
import SafariDetail from './pages/SafariDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- Import it here

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/safaris" element={<Safaris />} />
        <Route path="/safaris/:id" element={<SafariDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      {/* ScrollToTop must be inside Router to read the current URL */}
      <ScrollToTop /> 
      
      <div className="flex min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="flex-1 lg:ml-64 relative min-h-screen overflow-x-hidden flex flex-col">
          <div className="flex-1">
            <AnimatedRoutes />
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
}