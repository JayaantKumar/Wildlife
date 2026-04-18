// src/pages/About.jsx
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';

export default function About() {
  return (
    <PageTransition>
      {/* Main About Content */}
      <div className="pt-32 pb-32 px-6 md:px-16 min-h-screen flex flex-col lg:flex-row gap-16 max-w-[1400px] mx-auto items-center">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1552168324-d612d77725e3?w=1200" 
            alt="Photographer" 
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide mb-12 text-white">
            Behind the Lens
          </h2>
          
          <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            <p>
              I am a conservation photographer and marine biologist, dedicated to exposing the delicate balance of Earth's most extreme environments. Through visual storytelling, I aim to ignite a global conversation about conservation.
            </p>
            <p>
              For over two decades, I have braved sub-zero temperatures, dived into uncharted waters, and traversed arid landscapes to capture the untold stories of our planet's wildlife.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Recognition</h3>
            <ul className="space-y-6 border-t border-white/10 pt-8">
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">Wildlife Photographer of the Year</span>
                <span className="text-gray-500 tracking-widest text-sm">2023</span>
              </li>
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">World Press Photo - Nature</span>
                <span className="text-gray-500 tracking-widest text-sm">2021</span>
              </li>
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">National Geographic Explorer</span>
                <span className="text-gray-500 tracking-widest text-sm">2019</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscribe & Quote Section added to the bottom */}
      <SubscribeSection />
    </PageTransition>
  );
}