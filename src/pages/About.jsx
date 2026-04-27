// src/pages/About.jsx
import PageTransition from '../components/PageTransition';
import SubscribeSection from '../components/SubscribeSection';

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-32 px-6 md:px-16 min-h-screen flex flex-col lg:flex-row gap-16 max-w-[1400px] mx-auto items-center">
        
        <div className="w-full lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1552168324-d612d77725e3?w=1200" 
            alt="Photographer in Jungle" 
            className="w-full h-auto object-cover  shadow-2xl"
          />
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide mb-12 text-white">
            Behind the Lens
          </h2>
          
          <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            <p>
              Based in India, my work is dedicated to documenting the incredible biodiversity of the Indian subcontinent. From the dense Sal forests of Central India to the high-altitude deserts of the Himalayas, I specialize in capturing the untold stories of India's apex predators.
            </p>
            <p>
              For over a decade, I have guided photographers and wildlife enthusiasts through India's premier national parks, providing expert tuition and securing the best photographic opportunities while strictly adhering to ethical wildlife practices.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-8">Expertise</h3>
            <ul className="space-y-6 border-t border-white/10 pt-8">
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">Big Cat Tracking</span>
                <span className="text-gray-500 tracking-widest text-sm">Kanha, Bandhavgarh, Ranthambore</span>
              </li>
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">High Altitude Expeditions</span>
                <span className="text-gray-500 tracking-widest text-sm">Spiti Valley, Ladakh</span>
              </li>
              <li className="flex justify-between items-center font-light border-b border-white/5 pb-4">
                <span className="text-white text-lg font-serif">Photographic Tuition</span>
                <span className="text-gray-500 tracking-widest text-sm">Lightroom & Field Craft</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </PageTransition>
  );
}