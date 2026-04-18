// src/pages/About.jsx
export default function About() {
  return (
    <div className="pt-24 pb-24 px-4 md:px-12 min-h-screen flex flex-col lg:flex-row gap-16 animate-[fadeIn_1s_ease-in-out]">
      <div className="w-full lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1552168324-d612d77725e3?w=1200" 
          alt="Photographer" 
          className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-light tracking-[0.2em] uppercase mb-12">Behind the Lens</h2>
        
        <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
          <p>
            I am a conservation photographer and marine biologist, dedicated to exposing the delicate balance of Earth's most extreme environments. Through visual storytelling, I aim to ignite a global conversation about conservation.
          </p>
          <p>
            For over two decades, I have braved sub-zero temperatures, dived into uncharted waters, and traversed arid landscapes to capture the untold stories of our planet's wildlife.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-sm tracking-widest text-gray-500 uppercase mb-6">Recognition</h3>
          <ul className="space-y-4 border-t border-white/10 pt-6">
            <li className="flex justify-between items-center text-sm font-light">
              <span>Wildlife Photographer of the Year</span>
              <span className="text-gray-500">2023</span>
            </li>
            <li className="flex justify-between items-center text-sm font-light">
              <span>World Press Photo - Nature</span>
              <span className="text-gray-500">2021</span>
            </li>
            <li className="flex justify-between items-center text-sm font-light">
              <span>National Geographic Explorer</span>
              <span className="text-gray-500">2019</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}