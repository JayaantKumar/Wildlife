// src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white w-full border-t border-white/5">
      {/* Top Section - Quote */}
      <div className="bg-[#e6e6e6] text-[#1a1a1a] py-16 px-6 text-center">
        <p className="text-xl md:text-2xl font-serif italic tracking-wide max-w-4xl mx-auto mb-2">
          "The picture is there, you just have to find it." - London wildlife photographer, Jhon Doe
        </p>
        <p className="text-lg font-light">
          Please explore this site. If you need anything, you can <Link to="/contact" className="border-b border-[#1a1a1a] pb-0.5 hover:text-gray-600 transition-colors">contact me</Link>.
        </p>
      </div>

      {/* Middle Section - Subscribe */}
      <div className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-light tracking-[0.1em] mb-4">Subscribe</h3>
        <p className="text-sm text-gray-400 font-light tracking-wide mb-8 leading-relaxed">
          Sign up with your email address to receive news and advance notice about print releases, safaris, new destinations and subscriber offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full sm:w-96 px-4 py-3 bg-white text-black focus:outline-none"
            required
          />
          <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-[#e6e6e6] text-black text-sm tracking-widest uppercase font-medium hover:bg-gray-300 transition-colors">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-gray-500 tracking-widest">We respect your privacy.</p>
      </div>

      {/* Bottom Section - Copyright & Socials */}
      <div className="bg-[#111] py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5">
        <div className="text-xs tracking-widest text-gray-500 uppercase">
          Jhon Doe
        </div>
        <div className="text-xs tracking-widest text-gray-500 text-center leading-relaxed">
          Copyright © Jhon Doe 2026. All Rights Reserved.<br />
          Jhon Doe Wildlife Photography
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.557z"/></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}