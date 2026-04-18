// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2500&auto=format&fit=crop", // Tiger
  "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?q=80&w=2500&auto=format&fit=crop", // Polar Bear
  "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2500&auto=format&fit=crop"  // Elephants
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: '100%', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${heroImages[currentIndex]}")` }}
        />
      </AnimatePresence>
      
      {/* Static Dark Gradient Overlay (Lightened for brightness) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10 pointer-events-none"></div>

      {/* Center Quote */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] leading-tight drop-shadow-lg">
          "One touch of nature <br className="hidden md:block" /> makes the whole world kin."
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row justify-between items-end gap-8 md:gap-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-2xl text-xs md:text-sm text-gray-100 tracking-wider font-light">
          <div>Documenting the fragile ecosystems of our planet.</div>
          <div>Over 20 years of expeditions in extreme environments.</div>
          <div>Fine art prints supporting wildlife conservation.</div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <span className="text-xs tracking-widest text-gray-300 uppercase">National Geographic Contributor</span>
          <button className="px-8 py-3 border border-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500 backdrop-blur-sm">
            Buy Book
          </button>
        </div>
      </div>
    </div>
  );
}