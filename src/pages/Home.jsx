// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';

const slides = [
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2500",
  "https://images.unsplash.com/photo-1564349683136-77e08bef1ed1?q=80&w=2500",
  "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2500"
];

const contentSections = [
  {
    id: 1,
    subtitle: "The Expedition",
    title: "Capturing the \n Heart of Africa",
    quote: "\"To photograph wildlife is to wait for the world to reveal its true face when it thinks no one is watching.\"",
    text: "Based in London but found in the wild, my work focuses on the stark, dramatic contrasts of the natural world—emphasizing textures, shadows, and the silent narratives of survival.",
    image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=1200",
    reverse: false
  },
  {
    id: 2,
    subtitle: "The Frozen North",
    title: "Silence of \n the Arctic",
    quote: "\"In the absolute cold, every breath is a story, and every shadow is a struggle for existence.\"",
    text: "Venturing into the sub-zero temperatures of Svalbard, documenting the fragile ecosystem of the ice giants before they vanish forever. A study in white, blue, and absolute resilience.",
    image: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?w=1200",
    reverse: true
  },
  {
    id: 3,
    subtitle: "Deep Blue",
    title: "Giants of \n the Ocean",
    quote: "\"Beneath the surface lies a world of weightless grace, where the largest creatures move like ghosts.\"",
    text: "Diving alongside majestic leviathans to capture the serene and terrifying beauty of the deep. These images aim to bridge the gap between humanity and the mysteries of the ocean.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
    reverse: false
  },
  {
    id: 4,
    subtitle: "Jungle Canopy",
    title: "Eyes in \n the Dark",
    quote: "\"The jungle breathes. It watches. To capture its inhabitants, you must become part of its rhythm.\"",
    text: "Navigating the dense, humid rainforests to find the elusive predators that rule the shadows. An exploration of vibrant greens, piercing eyes, and raw instinct.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08bef1ed1?w=1200",
    reverse: true
  },
  {
    id: 5,
    subtitle: "High Altitudes",
    title: "Ghosts of \n the Mountains",
    quote: "\"To find the snow leopard is to search for a phantom made of rock and ice.\"",
    text: "Enduring the thin air and treacherous terrain of the Himalayas to photograph some of the most elusive and endangered species on the planet. A true test of patience and endurance.",
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=1200",
    reverse: false
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index]})` }}
          />
        </AnimatePresence>
        
        {/* Subtle Bottom-Weighted Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

        {/* Text moved to Bottom Right */}
        <div className="absolute bottom-12 right-8 md:right-16 z-20 text-right">
          <h2 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-white mb-3 drop-shadow-lg">
            Jhon Doe Wildlife Photography
          </h2>
          <p className="text-xs md:text-sm text-gray-300 font-light tracking-widest uppercase drop-shadow-md">
            Six times awarded in Wildlife Photographer of the Year
          </p>
        </div>
      </section>

      {/* Vertical Content Sections */}
      <section className="bg-black pt-32 pb-16">
        {contentSections.map((section, idx) => (
          <div key={section.id} className="px-6 md:px-24 mb-32 md:mb-48 last:mb-24">
            <div className={`max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 items-center ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Text Block */}
              <div className="w-full md:w-1/2 space-y-8">
                <h3 className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase">
                  {section.subtitle}
                </h3>
                <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] uppercase leading-snug whitespace-pre-line">
                  {section.title}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-lg italic border-l border-white/20 pl-6">
                  {section.quote}
                </p>
                <p className="text-gray-500 font-light leading-relaxed">
                  {section.text}
                </p>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden aspect-[4/5] md:aspect-auto">
                  <img 
                    src={section.image} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                    alt={section.title.replace('\n', '')}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>
      <SubscribeSection />
    </PageTransition>
  );
}