// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';
import { safaris } from '../data'; 

const slides = [
  "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
  "https://newsarenaindia.com/_next/image?url=https%3A%2F%2Fimages.newsarenaindia.com%2Frhino-3jpg_1732885188883.jpg&w=1920&q=75", 
  "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-03-at-13.06.21-scaled.jpeg"  
];

const contentSections = [
  {
    id: 1,
    subtitle: "Central India",
    title: "The Realm of \n the Tiger",
    quote: "\"To lock eyes with a wild Bengal Tiger in the Sal forests is an experience that alters you forever.\"",
    text: "Specializing in the premier tiger reserves of Central India—Kanha, Pench, and Bandhavgarh. Our safaris are designed to track and photograph the apex predator of the Indian jungle in its natural, untamed habitat.",
    image: "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
    reverse: false
  },
  {
    id: 2,
    subtitle: "The Southern Jungles",
    title: "Shadows of \n Kabini",
    quote: "\"In the dense canopy of the south, the leopard is a ghost that only reveals itself to the patient.\"",
    text: "Journey into the lush forests of Nagarhole and Bandipur. Known for its incredible leopard population and the elusive black panther, the southern jungles offer a dramatic, moody backdrop for fine art wildlife photography.",
    image: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-03-at-13.06.21-scaled.jpeg",
    reverse: true
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
      {/* 1. HERO FIX: Changed mobile height to h-[80vh] to show more image width */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0 bg-cover bg-[center_top] md:bg-center" 
            style={{ backgroundImage: `url(${slides[index]})` }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-16 z-20 text-right">
          <h2 className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-white mb-2 md:mb-3 drop-shadow-lg">
            Indian Wildlife Safaris
          </h2>
          <p className="text-[10px] md:text-sm text-gray-300 font-light tracking-widest uppercase drop-shadow-md">
            Premium Photography Expeditions across India
          </p>
        </div>
      </section>

      {/* Editorial Content Sections */}
      <section className="bg-black pt-20 md:pt-32 pb-10 md:pb-16">
        {contentSections.map((section) => (
          <div key={section.id} className="px-6 md:px-24 mb-24 md:mb-32 max-w-[1400px] mx-auto">
            <div className={`flex flex-col gap-8 md:gap-20 items-center ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
                <h3 className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase">
                  {section.subtitle}
                </h3>
                <h2 className="text-3xl md:text-5xl font-serif uppercase leading-snug whitespace-pre-line text-white">
                  {section.title}
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-base md:text-lg italic border-l border-white/20 pl-4 md:pl-6">
                  {section.quote}
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                  {section.text}
                </p>
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                {/* 2. CONTENT FIX: Changed from tall aspect to aspect-video (16:9) on mobile */}
                <div className="overflow-hidden aspect-video md:aspect-auto md:h-[600px] w-full">
                  <img 
                    src={section.image} 
                    className="w-full h-full object-cover shadow-2xl"
                    alt="Indian Wildlife"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Featured Safari Packages */}
      <section className="bg-[#111] py-20 md:py-32 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase mb-4">Join an Expedition</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Featured Safari Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.slice(0, 3).map((safari) => (
              <div key={safari.id} className="flex flex-col text-center group bg-black p-4 md:p-6 border border-white/5">
                <Link to={`/safaris/${safari.id}`} className="w-full overflow-hidden mb-6 aspect-video md:aspect-[4/3]">
                  <img 
                    src={safari.coverUrl} 
                    alt={safari.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>
                <h3 className="text-lg md:text-xl font-serif text-white mb-2">{safari.title}</h3>
                <p className="text-[10px] md:text-xs text-gray-400 mb-1 font-light tracking-widest uppercase">{safari.duration}</p>
                <p className="text-xs md:text-sm text-gray-500 mb-6 font-light">{safari.location}</p>
                <Link 
                  to={`/safaris/${safari.id}`}
                  className="bg-white text-black text-[10px] md:text-xs tracking-widest uppercase py-3 px-6 hover:bg-gray-300 transition-colors"
                >
                  View Package
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
             <Link to="/safaris" className="text-xs md:text-sm tracking-[0.2em] text-white uppercase border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                View All Safaris
             </Link>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </PageTransition>
  );
}