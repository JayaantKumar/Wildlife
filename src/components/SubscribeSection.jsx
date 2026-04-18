// src/components/SubscribeSection.jsx
import { Link } from 'react-router-dom';

export default function SubscribeSection() {
  return (
    <div className="w-full">
      {/* Top Section - Quote (Light Gray) */}
      <div className="bg-[#e3e3e1] text-[#1a1a1a] py-16 px-6 text-center">
        <p className="text-2xl md:text-3xl font-serif italic tracking-wide max-w-5xl mx-auto mb-3 text-gray-800">
          "The picture is there, you just have to find it." <span className="text-xl not-italic font-sans font-light">- London wildlife photographer, Jhon Doe</span>
        </p>
        <p className="text-xl font-serif text-gray-800">
          Please explore this site. If you need anything, you can <Link to="/contact" className="border-b border-[#1a1a1a] pb-0.5 hover:text-gray-500 transition-colors">contact me</Link>.
        </p>
      </div>

      {/* Bottom Section - Subscribe (Dark Slate) */}
      <div className="bg-[#454a4f] text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-serif tracking-wide mb-6">Subscribe</h3>
        <p className="text-base text-gray-300 font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
          Sign up with your email address to receive news and advance notice about print releases, safaris, new destinations and subscriber offers.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full sm:w-80 px-5 py-3.5 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            required
          />
          <button type="submit" className="w-full sm:w-auto px-10 py-3.5 bg-[#dcdcdc] text-gray-900 text-sm tracking-widest font-medium rounded-sm hover:bg-white transition-colors">
            SIGN UP
          </button>
        </form>
        
        <p className="text-sm text-gray-400 font-light tracking-wide">We respect your privacy.</p>
      </div>
    </div>
  );
}