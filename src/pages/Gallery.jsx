// src/pages/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data';
import PageTransition from '../components/PageTransition';

export default function Gallery() {
  const [filter, setFilter] = useState('All Galleries');
  const tabs = ['All Galleries', 'Recent Images', 'Black and White', 'Colour', 'Awarded'];

  const getFilteredImages = () => {
    switch(filter) {
      case 'Recent Images': return [...galleryImages].sort((a,b) => new Date(b.date) - new Date(a.date));
      case 'Black and White': return galleryImages.filter(img => img.type === 'Black and White');
      case 'Colour': return galleryImages.filter(img => img.type === 'Colour');
      case 'Awarded': return galleryImages.filter(img => img.isAwarded);
      default: return galleryImages;
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 md:pt-32 pb-24 px-4 md:px-12">
        {/* Gallery Navigation */}
        <div className="flex flex-wrap gap-4 md:gap-12 mb-12 md:mb-20 border-b border-white/10 pb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all ${
                filter === tab ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GALLERY FIX: True Masonry Layout so images aren't cropped to squares */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode='popLayout'>
            {getFilteredImages().map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative group overflow-hidden bg-zinc-900 mb-4 inline-block w-full rounded-sm"
              >
                {/* Notice h-auto is used so the image dictates its own height */}
                <img 
                  src={img.url} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={img.title} 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-white tracking-widest uppercase text-xs">{img.title}</p>
                  {img.isAwarded && <span className="text-[10px] text-zinc-400 tracking-tighter uppercase mt-2">Award Winning Selection</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}